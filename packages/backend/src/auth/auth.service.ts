import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { compare, hash } from 'bcryptjs';
import { UsersService } from '../users/users.service';
import { UserDocument } from '../users/user.model';
import { LoggedInUser } from './auth.interfaces';
import { Configurations } from '../configurations.enum';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  private async isPasswordValid(password: string, hashedPassword?: string) {
    return !!hashedPassword && compare(password, hashedPassword);
  }

  private async getTokens(userId: string, username: string) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          username,
        },
        {
          secret: this.configService.getOrThrow<string>(
            Configurations.JWT_SECRET,
          ),
          expiresIn: this.configService.get<string | number>(
            Configurations.TOKEN_EXPIRES_IN,
          ),
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          username,
        },
        {
          secret: this.configService.get<string>(
            Configurations.JWT_REFRESH_SECRET,
          ),
          expiresIn: this.configService.get<string | number>(
            Configurations.REFRESH_EXPIRES_IN,
          ),
        },
      ),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }

  private async updateRefreshToken(userId: string, token: string) {
    return this.usersService.updateRefreshToken(userId, await hash(token, 16));
  }

  public async getUser(username: string, password: string) {
    const user = await this.usersService.getByName(username);
    const isValidPassword = await this.isPasswordValid(
      password,
      user?.password,
    );
    return isValidPassword ? user : null;
  }

  public async refreshTokens(
    userLoggedIn: LoggedInUser,
    refreshToken?: string,
  ) {
    const user = await this.usersService.getUser(userLoggedIn.userId);

    if (!refreshToken || !user.refreshToken) {
      throw new ForbiddenException('No Refresh Token');
    }
    const isValid = await this.isPasswordValid(refreshToken, user.refreshToken);
    if (!isValid) {
      throw new ForbiddenException('Access Denied');
    }
    return this.login(user);
  }

  public async login(user: UserDocument) {
    const { accessToken, refreshToken } = await this.getTokens(
      user._id,
      user.name,
    );
    await this.updateRefreshToken(user._id, refreshToken);
    return {
      access_token: accessToken,
      refresh_token: refreshToken,
      token_type: 'Bearer',
      expires_in: this.configService.get<string>(
        Configurations.TOKEN_EXPIRES_IN,
      ),
    };
  }

  public async logout(userLoggedIn: LoggedInUser) {
    return this.usersService.cleanRefreshToken(userLoggedIn.userId);
  }
}

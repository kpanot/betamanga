import { Injectable } from '@nestjs/common';
import { compare } from 'bcryptjs';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserDocument } from '../users/user.model';
import { JwtPayload } from './auth.interfaces';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  private async isPasswordValid(password: string, hashedPassword?: string) {
    return !!hashedPassword && compare(password, hashedPassword);
  }

  public async getUser(username: string, password: string) {
    const user = await this.usersService.getByName(username);
    const isValidPassword = await this.isPasswordValid(
      password,
      user?.password,
    );
    return isValidPassword ? user : null;
  }

  public async login(user: UserDocument) {
    const payload: JwtPayload = { username: user.name, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

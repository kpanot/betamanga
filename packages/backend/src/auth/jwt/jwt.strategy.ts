import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtPayload, LoggedInUser } from '../auth.interfaces';
import { Configurations } from '../../configurations.enum';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.getOrThrow<string>(Configurations.JWT_SECRET),
    });
  }

  public async validate(payload: JwtPayload): Promise<LoggedInUser> {
    return { userId: payload.sub, username: payload.username };
  }
}

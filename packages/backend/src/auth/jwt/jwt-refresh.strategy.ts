import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtPayload, LoggedInUser } from '../auth.interfaces';
import { Request } from 'express';
import { Configurations } from '../../configurations.enum';

@Injectable()
export class RefreshStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>(Configurations.JWT_REFRESH_SECRET),
      passReqToCallback: true,
    });
  }

  public async validate(
    req: Request,
    payload: JwtPayload,
  ): Promise<LoggedInUser> {
    const refreshToken = req.get('Authorization').replace('Bearer', '').trim();
    return { userId: payload.sub, username: payload.username, refreshToken };
  }
}

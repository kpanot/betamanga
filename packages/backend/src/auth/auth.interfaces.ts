import { ApiProperty } from '@nestjs/swagger';

export interface JwtPayload {
  username: string;
  sub: string;
}

export interface LoggedInUser {
  userId: string;
  username: string;
  refreshToken?: string;
}

export interface LoggedInRequest {
  user: LoggedInUser;
}

export class PostBasicAuthParameter {
  @ApiProperty({ description: 'Username to login' })
  username: string;

  @ApiProperty({ description: 'Password of the user' })
  password: string;
}

export class JwtTokenResponse {
  @ApiProperty({ description: 'Json Web Token to use as bearer Token' })
  access_token: string;
}

export interface JwtPayload {
  username: string;
  sub: string;
}

export interface LoggedInUser {
  userId: string;
  username: string;
}

export interface LoggedInRequest {
  user: LoggedInUser;
}

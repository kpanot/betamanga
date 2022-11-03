import {
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { UserDocument } from '../users/user.model';
import {
  JwtTokenResponse,
  LoggedInRequest,
  PostBasicAuthParameter,
} from './auth.interfaces';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt/jwt-auth.guard';
import { JwtAuthRefreshTokenGuard } from './jwt/jwt-refresh-auth.guard';
import { LocalAuthGuard } from './local/local-auth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiBody({ type: PostBasicAuthParameter })
  @ApiOperation({
    summary: 'Identify user',
    description:
      'Identify user and retrieve bearer token to access to limited apis',
  })
  @ApiResponse({
    type: JwtTokenResponse,
    status: 200,
    description: 'Bearer Token',
  })
  @ApiUnauthorizedResponse({ description: 'Fail to identify the user' })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  public async login(@Request() req: { user: UserDocument }) {
    return this.authService.login(req.user);
  }

  @ApiOperation({
    summary: 'Logout user',
    description: 'Logout user and revoke refresh token',
  })
  @ApiResponse({
    status: 204,
    description: 'Successfully logout',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('logout')
  @HttpCode(204)
  public async logout(@Req() req: LoggedInRequest) {
    await this.authService.logout(req.user);
  }

  @ApiOperation({
    summary: 'Renew Bearer token',
    description: 'Use refresh token to renew bearer token',
  })
  @ApiResponse({
    type: JwtTokenResponse,
    status: 200,
    description: 'Bearer Token',
  })
  @ApiBearerAuth('jwt-refresh')
  @ApiUnauthorizedResponse({ description: 'Fail to identify the user' })
  @UseGuards(JwtAuthRefreshTokenGuard)
  @Get('refresh')
  public async refreshTokens(@Req() req: LoggedInRequest) {
    const { refreshToken } = req.user;
    return this.authService.refreshTokens(req.user, refreshToken);
  }
}

import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { UserDocument } from '../users/user.model';
import { JwtTokenResponse, PostBasicAuthParameter } from './auth.interfaces';
import { AuthService } from './auth.service';
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
}

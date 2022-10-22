import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { UserDocument } from '../users/user.model';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  public async login(@Request() req: { user: UserDocument }) {
    return this.authService.login(req.user);
  }
}

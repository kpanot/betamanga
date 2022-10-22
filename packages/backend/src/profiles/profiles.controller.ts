import { Controller, Get, Param, Request, UseGuards } from '@nestjs/common';
import { LoggedInRequest } from '../auth/auth.interfaces';
import { JwtAuthGuard } from '../auth/jwt/jwt-auth.guard';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profileService: ProfilesService) {}

  @UseGuards(JwtAuthGuard)
  @Get('me')
  public async getMe(@Request() req: LoggedInRequest) {
    const profile = await this.profileService.getMe(req.user);
    return profile;
  }

  @UseGuards(JwtAuthGuard)
  @Get(':name')
  public async getProfile(@Param('name') name: string) {
    const profile = await this.profileService.getByName(name);
    return profile;
  }
}

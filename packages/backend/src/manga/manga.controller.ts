import {
  Controller,
  Get,
  Param,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { LoggedInRequest } from '../auth/auth.interfaces';
import { JwtAuthGuard } from '../auth/jwt/jwt-auth.guard';
import { MangaService } from './manga.service';

@Controller('manga')
export class MangaController {
  constructor(private readonly mangaService: MangaService) {}

  @Get()
  public async searchAuthor(@Query('name') name?: string) {
    if (!name) {
      return await this.mangaService.getAll();
    }
    const manga = await this.mangaService.searchName(name);
    return manga;
  }

  @Get(':id')
  public async getManga(@Param('id') id: string) {
    const manga = await this.mangaService.getById(id);
    return manga;
  }

  @Get(':id/volumes')
  public async getVolumes(@Param('id') id: string) {
    const volumes = await this.mangaService.getVolumes(id);
    return volumes;
  }

  @Get(':id/chapters')
  public async getChapters(@Param('id') id: string) {
    const chapters = await this.mangaService.getChapters(id);
    return chapters;
  }

  @Get(':id/chapters/future')
  public async getFutureChapters(@Param('id') id: string) {
    const chapters = await this.mangaService.getFutureChapters(id);
    return chapters;
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id/chapters/not-read')
  public async getRemainingChapters(
    @Param('id') id: string,
    @Request() req: LoggedInRequest,
  ): Promise<any> {
    const chapters = await this.mangaService.getRemainChapters(id, req.user);
    return chapters;
  }
}

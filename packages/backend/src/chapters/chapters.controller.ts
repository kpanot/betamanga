import { Controller, Get, Param } from '@nestjs/common';
import { ChaptersService } from './chapters.service';

@Controller('chapters')
export class ChaptersController {
  constructor(private readonly chaptersService: ChaptersService) {}

  @Get(':id')
  public async getChapter(@Param('id') id: string) {
    const chapter = await this.chaptersService.getById(id);
    return chapter;
  }
}

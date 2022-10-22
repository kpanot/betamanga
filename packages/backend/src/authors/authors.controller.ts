import { Controller, Get, Param, Query } from '@nestjs/common';
import { AuthorsService } from './authors.service';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Get('search')
  public async searchAuthor(@Query('name') name?: string) {
    if (!name) {
      return this.getAuthors();
    }
    const profile = await this.authorsService.searchName(name);
    return profile;
  }

  @Get()
  public async getAuthors() {
    const profile = await this.authorsService.getAll();
    return profile;
  }

  @Get(':id')
  public async getAuthor(@Param('id') id: string) {
    const profile = await this.authorsService.getById(id);
    return profile;
  }
}

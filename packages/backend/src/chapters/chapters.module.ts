import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MangaModule } from '../manga/manga.module';
import { Chapter, ChapterSchema } from './chapter.model';
import { ChaptersService } from './chapters.service';
import { ChaptersController } from './chapters.controller';

@Module({
  imports: [
    MangaModule,
    MongooseModule.forFeature([{ name: Chapter.name, schema: ChapterSchema }]),
  ],
  providers: [ChaptersService],
  exports: [ChaptersService],
  controllers: [ChaptersController],
})
export class ChaptersModule {}

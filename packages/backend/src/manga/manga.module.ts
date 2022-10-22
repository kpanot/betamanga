import { Module } from '@nestjs/common';
import { MangaService } from './manga.service';
import { MangaController } from './manga.controller';
import { AuthorsModule } from '../authors/authors.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Manga, MangaSchema } from './manga.model';
import { ProfilesModule } from '../profiles/profiles.module';

@Module({
  imports: [
    AuthorsModule,
    ProfilesModule,
    MongooseModule.forFeature([{ name: Manga.name, schema: MangaSchema }]),
  ],
  providers: [MangaService],
  exports: [MangaService],
  controllers: [MangaController],
})
export class MangaModule {}

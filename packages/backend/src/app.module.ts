import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfilesModule } from './profiles/profiles.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthorsModule } from './authors/authors.module';
import { MangaModule } from './manga/manga.module';
import { ChaptersModule } from './chapters/chapters.module';
import { VolumesModule } from './volumes/volumes.module';
import { PublishersModule } from './publishers/publishers.module';
import { SeriesModule } from './series/series.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGODB_URL || 'mongodb://localhost/nest',
    ),
    ConfigModule.forRoot({ isGlobal: true }),
    ProfilesModule,
    AuthModule,
    UsersModule,
    AuthorsModule,
    MangaModule,
    ChaptersModule,
    VolumesModule,
    PublishersModule,
    SeriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

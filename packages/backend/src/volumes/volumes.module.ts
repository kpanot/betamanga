import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChaptersModule } from '../chapters/chapters.module';
import { SeriesModule } from '../series/series.module';
import { PublishersModule } from '../publishers/publishers.module';
import { Volume, VolumeSchema } from './volume.model';
import { VolumesService } from './volumes.service';

@Module({
  imports: [
    ChaptersModule,
    PublishersModule,
    SeriesModule,
    MongooseModule.forFeature([{ name: Volume.name, schema: VolumeSchema }]),
  ],
  providers: [VolumesService],
  exports: [VolumesService],
})
export class VolumesModule {}

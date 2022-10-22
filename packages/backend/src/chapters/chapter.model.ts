import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import type { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Manga } from '../manga/manga.model';
import { hidePrivateFieldsTransformFactory } from '../utils/mongo/mongo.helpers';
import { VolumeDocument } from '../volumes/volume.model';

@Schema({
  toJSON: {
    transform: hidePrivateFieldsTransformFactory(),
  },
})
export class Chapter {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Manga.name,
    required: true,
  })
  manga: Manga;

  @Prop()
  title?: string;

  @Prop({ type: Number })
  number?: number;

  @Prop({ type: Number })
  pageNumber?: number;

  @Prop()
  synopsis?: string;

  @Prop({ type: Date })
  releaseDate?: Date;

  @Prop({ required: true, type: Date })
  _createdAt: Date;

  @Prop({ required: true, type: Date })
  _updatedAt: Date;
}

interface VirtualFields {
  readonly volumes?: VolumeDocument[];
}

export type ChapterDocument = Chapter & VirtualFields & Document;

const ChapterSchema = SchemaFactory.createForClass(Chapter);
ChapterSchema.virtual('volumes', {
  ref: 'Volume', // volume.name
  localField: '_id',
  foreignField: 'chapters',
});

export const chapterComplexFields: (keyof Chapter)[] = ['manga'];

export const chapterVirtualFields: (keyof VirtualFields)[] = ['volumes'];

export { ChapterSchema };

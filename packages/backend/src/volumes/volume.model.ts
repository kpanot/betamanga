import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import type { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Chapter } from '../chapters/chapter.model';
import { Series } from '../series/series.model';
import { Publisher } from '../publishers/publisher.model';
import { hidePrivateFieldsTransformFactory } from '../utils/mongo/mongo.helpers';

@Schema({
  toJSON: {
    transform: hidePrivateFieldsTransformFactory(),
  },
})
export class Volume {
  @Prop()
  title?: string;

  @Prop({ required: true, enum: ['book', 'weekly'] })
  type: 'book' | 'weekly';

  @Prop({
    required: true,
    type: [{ type: mongoose.Types.ObjectId, ref: Chapter.name }],
  })
  chapters: Chapter[];

  @Prop()
  synopsis?: string;

  @Prop({
    type: mongoose.Types.ObjectId,
    ref: Publisher.name,
  })
  publisher?: Publisher;

  @Prop({
    type: mongoose.Types.ObjectId,
    ref: Series.name,
  })
  series?: Series;

  @Prop({ type: Number })
  number?: number;

  @Prop({ type: Date })
  releaseDate?: Date;

  @Prop()
  country?: string;

  @Prop({ required: true, type: Date })
  _createdAt: Date;

  @Prop({ required: true, type: Date })
  _updatedAt: Date;
}

export type VolumeDocument = Volume & Document;

const VolumeSchema = SchemaFactory.createForClass(Volume);

export { VolumeSchema };

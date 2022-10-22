import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import type { Document } from 'mongoose';
import { hidePrivateFieldsTransformFactory } from '../utils/mongo/mongo.helpers';

@Schema({
  toJSON: {
    transform: hidePrivateFieldsTransformFactory(),
  },
})
export class Series {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, type: Date })
  _createdAt: Date;

  @Prop({ required: true, type: Date })
  _updatedAt: Date;
}

export type SeriesDocument = Series & Document;

export const SeriesSchema = SchemaFactory.createForClass(Series);

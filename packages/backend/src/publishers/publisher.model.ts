import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import type { Document } from 'mongoose';
import { hidePrivateFieldsTransformFactory } from '../utils/mongo/mongo.helpers';

@Schema({
  toJSON: {
    transform: hidePrivateFieldsTransformFactory(),
  },
})
export class Publisher {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, type: Date })
  _createdAt: Date;

  @Prop({ required: true, type: Date })
  _updatedAt: Date;

  @Prop()
  country?: string;
}

export type PublisherDocument = Publisher & Document;

export const PublisherSchema = SchemaFactory.createForClass(Publisher);

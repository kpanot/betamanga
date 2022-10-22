import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import type { Document } from 'mongoose';
import { hidePrivateFieldsTransformFactory } from '../utils/mongo/mongo.helpers';

@Schema({
  toJSON: {
    transform: hidePrivateFieldsTransformFactory(),
  },
})
export class Author {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  gender: string;

  @Prop({ type: Date })
  birthDate?: Date;

  @Prop({ required: true, type: Date })
  _createdAt: Date;

  @Prop({ required: true, type: Date })
  _updatedAt: Date;
}

export type AuthorDocument = Author & Document;

const AuthorSchema = SchemaFactory.createForClass(Author);
AuthorSchema.index({ firstName: 'text', lastName: 'text' });
export { AuthorSchema };

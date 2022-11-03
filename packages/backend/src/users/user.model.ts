import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import type { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Profile } from '../profiles/profile.model';
import { hidePrivateFieldsTransformFactory } from '../utils/mongo/mongo.helpers';

@Schema({
  toJSON: {
    transform: hidePrivateFieldsTransformFactory(),
  },
})
export class User {
  @Prop({ required: true, unique: true, minlength: 3 })
  name: string;

  @Prop({ required: true })
  password: string;

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: Profile.name,
  })
  profile: Profile;

  @Prop()
  refreshToken?: string;

  @Prop({ required: true, type: Date })
  _createdAt: Date;

  @Prop({ required: true, type: Date })
  _updatedAt: Date;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);

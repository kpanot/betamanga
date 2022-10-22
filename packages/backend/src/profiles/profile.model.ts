import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import type { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Chapter, ChapterDocument } from '../chapters/chapter.model';
import { Manga, MangaDocument } from '../manga/manga.model';
import { Series, SeriesDocument } from '../series/series.model';
import { hidePrivateFieldsTransformFactory } from '../utils/mongo/mongo.helpers';

@Schema({
  toJSON: {
    transform: hidePrivateFieldsTransformFactory(),
  },
})
export class Profile {
  @Prop({ required: true, minlength: 3 })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({
    type: [
      {
        type: mongoose.Types.ObjectId,
        ref: Chapter.name,
      },
    ],
    required: true,
    default: [],
  })
  readChapters: ChapterDocument[];

  @Prop({
    type: [
      {
        type: mongoose.Types.ObjectId,
        ref: Manga.name,
      },
    ],
    required: true,
    default: [],
  })
  followedManga: MangaDocument[];

  @Prop({
    type: [
      {
        type: mongoose.Types.ObjectId,
        ref: Series.name,
      },
    ],
    required: true,
    default: [],
  })
  followedSeries: SeriesDocument[];

  @Prop()
  firstName?: string;

  @Prop()
  lastName?: string;

  @Prop()
  gender?: string;

  @Prop({ type: Date })
  birthDate?: Date;

  @Prop({ required: true, type: Date })
  _createdAt: Date;

  @Prop({ required: true, type: Date })
  _updatedAt: Date;
}

const ProfileSchema = SchemaFactory.createForClass(Profile);

export const profileComplexFields: (keyof Profile)[] = [
  'followedManga',
  'followedSeries',
  'readChapters',
];

export type ProfileDocument = Profile & Document;

export { ProfileSchema };

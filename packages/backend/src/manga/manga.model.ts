import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import type { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Author } from '../authors/author.model';
import { ChapterDocument } from '../chapters/chapter.model';
import { hidePrivateFieldsTransformFactory } from '../utils/mongo/mongo.helpers';
// import { VolumeDocument } from '../volumes/volume.model';

@Schema({
  toJSON: {
    transform: hidePrivateFieldsTransformFactory(),
  },
})
export class Manga {
  @Prop({ required: true })
  title: string;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: Author.name }],
    required: true,
  })
  mainAuthors: Author[];

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: Author.name }],
  })
  designers?: Author[];

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: Author.name }],
  })
  producers?: Author[];

  @Prop()
  synopsis?: string;

  @Prop({ type: Date })
  conceptionDate?: Date;

  @Prop({ required: true, default: false, type: Boolean })
  hasVideoAdaptation: boolean;

  @Prop()
  country?: string;

  @Prop({ required: true, type: Date })
  _createdAt: Date;

  @Prop({ required: true, type: Date })
  _updatedAt: Date;
}

interface VirtualFields {
  readonly chapters?: ChapterDocument[];
  // readonly volumes: VolumeDocument[];
}

export type MangaDocument = Manga & VirtualFields & Document;

const MangaSchema = SchemaFactory.createForClass(Manga);
MangaSchema.index({ title: 'text' });
MangaSchema.virtual('chapters', {
  ref: 'Chapter', // Chapter.name
  localField: '_id',
  foreignField: 'manga',
});

export const profileComplexFields: (keyof Manga)[] = [
  'mainAuthors',
  'designers',
  'producers',
];

export const profileVirtualFields: (keyof VirtualFields)[] = ['chapters'];

export { MangaSchema };

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Chapter,
  chapterComplexFields,
  ChapterDocument,
} from './chapter.model';

@Injectable()
export class ChaptersService {
  constructor(
    @InjectModel(Chapter.name)
    private readonly chapterModel: Model<ChapterDocument>,
  ) {}

  public async getById(id: string): Promise<Chapter> {
    const chapter = await this.chapterModel
      .findById(id)
      .populate(chapterComplexFields)
      .orFail(() => new NotFoundException())
      .exec();

    return chapter;
  }

  public async getSummarizedChaptersForManga(
    mangaId: string,
  ): Promise<Chapter[]> {
    const chapters = await this.chapterModel
      .find({ manga: mangaId })
      .select(['number', 'title'])
      .sort({ number: 'desc' })
      .orFail(() => new NotFoundException())
      .exec();
    return chapters;
  }
}

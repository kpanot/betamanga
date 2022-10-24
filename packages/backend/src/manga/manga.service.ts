import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoggedInUser } from '../auth/auth.interfaces';
import { Chapter, ChapterDocument } from '../chapters/chapter.model';
import { ProfilesService } from '../profiles/profiles.service';
import { Volume } from '../volumes/volume.model';
import { Manga, MangaDocument, profileComplexFields } from './manga.model';

@Injectable()
export class MangaService {
  constructor(
    @InjectModel(Manga.name)
    private readonly mangaModel: Model<MangaDocument>,
    private readonly profilesService: ProfilesService,
  ) {}

  public async searchName(name: string): Promise<Manga[]> {
    const authors = await this.mangaModel
      .find({ $text: { $search: name } })
      .exec();

    return authors;
  }

  public async getAll(): Promise<Manga[]> {
    const authors = await this.mangaModel.find().exec();

    return authors;
  }

  public async getChapters(id: string): Promise<Chapter[]> {
    const manga = await this.mangaModel
      .findById(id)
      .populate({
        path: 'chapters',
        match: { releaseDate: { $lte: new Date() } },
        options: { sort: [{ number: 'desc' }] },
      })
      .select(['chapters'])
      .orFail(() => new NotFoundException())
      .exec();
    return manga.chapters;
  }

  public async getFutureChapters(id: string): Promise<Chapter[]> {
    const manga = await this.mangaModel
      .findById(id)
      .populate({
        path: 'chapters',
        match: { releaseDate: { $gt: new Date() } },
        options: { sort: [{ number: 'desc' }] },
      })
      .select(['chapters'])
      .orFail(() => new NotFoundException())
      .exec();
    return manga.chapters;
  }

  public async getRemainChapters(
    id: string,
    user: LoggedInUser,
  ): Promise<ChapterDocument[]> {
    const profile = await this.profilesService.getMe(user);
    const chapterIds = profile.readChapters.map((chapter) => chapter._id);
    const manga = await this.mangaModel
      .findById(id)
      .populate({
        path: 'chapters',
        match: { _id: { $nin: chapterIds }, releaseDate: { $lte: new Date() } },
        options: { sort: [{ number: 'desc' }] },
      })
      .select(['chapters'])
      .orFail(() => new NotFoundException())
      .exec();
    return manga.chapters;
  }

  public async getVolumes(id: string): Promise<Volume[]> {
    const profile = await this.mangaModel
      .findById(id)
      .populate({
        path: 'chapters',
        populate: 'volumes',
      })
      .select(['chapters'])
      .orFail(() => new NotFoundException())
      .exec();
    return Array.from(
      new Set(profile.chapters.map((chapter) => chapter.volumes).flat()),
    ).sort((a, b) => (a.number || 0) - (b.number || 0));
  }

  public async getById(id: string): Promise<MangaDocument> {
    const profile = await this.mangaModel
      .findById(id)
      .populate(profileComplexFields)
      .orFail(() => new NotFoundException())
      .exec();
    return profile;
  }
}

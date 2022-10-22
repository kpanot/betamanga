import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Author, AuthorDocument } from './author.model';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectModel(Author.name)
    private readonly authorsModel: Model<AuthorDocument>,
  ) {}

  public async searchName(name: string): Promise<Author[]> {
    const authors = await this.authorsModel
      .find({ $text: { $search: name } })
      .exec();

    return authors;
  }

  public async getAll(): Promise<Author[]> {
    const authors = await this.authorsModel.find().exec();

    return authors;
  }

  public async getById(id: string): Promise<Author> {
    const author = await this.authorsModel
      .findById(id)
      .orFail(() => new NotFoundException())
      .exec();
    return author;
  }
}

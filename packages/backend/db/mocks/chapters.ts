import * as mongoose from 'mongoose';
import { Chapter, ChapterSchema } from '../../src/chapters/chapter.model';
import { Manga } from '../../src/manga/manga.model';

export const seedChapters = async (manga: Manga) => {
  const chapters: Readonly<Chapter[]> = [
    {
      manga,
      number: 1,
      title: 'Romance Dawn',
      releaseDate: new Date(1997, 12, 24),
      _createdAt: new Date(),
      _updatedAt: new Date(),
    },
    {
      manga,
      number: 2,
      title: `They Call Him 'Straw Hat Luffy'`,
      releaseDate: new Date(1997, 12, 24),
      _createdAt: new Date(),
      _updatedAt: new Date(),
    },
    {
      manga,
      number: 3,
      title: `Enter Zoro-Pirate Hunter`,
      releaseDate: new Date(1997, 12, 24),
      _createdAt: new Date(),
      _updatedAt: new Date(),
    },
    {
      manga,
      number: 9,
      title: `Femme Fatale`,
      releaseDate: new Date(1998, 4, 3),
      _createdAt: new Date(),
      _updatedAt: new Date(),
    },
  ];
  const model = mongoose.model(Chapter.name, ChapterSchema);
  await model.deleteMany();
  return await model.insertMany(chapters);
};

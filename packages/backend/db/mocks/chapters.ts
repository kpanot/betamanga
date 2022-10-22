import * as mongoose from 'mongoose';
import { Chapter, ChapterSchema } from '../../src/chapters/chapter.model';
import { Manga } from '../../src/manga/manga.model';

export const seedChapters = async (manga: Manga) => {
  const chapters: Readonly<Chapter[]> = [
    {
      manga,
      number: 1,
      title: 'Romance Dawn',
      _createdAt: new Date(),
      _updatedAt: new Date(),
    },
    {
      manga,
      number: 2,
      title: `They Call Him 'Straw Hat Luffy'`,
      _createdAt: new Date(),
      _updatedAt: new Date(),
    },
    {
      manga,
      number: 3,
      title: `Enter Zoro-Pirate Hunter`,
      _createdAt: new Date(),
      _updatedAt: new Date(),
    },
    {
      manga,
      number: 9,
      title: `Femme Fatale`,
      _createdAt: new Date(),
      _updatedAt: new Date(),
    },
  ];
  const model = mongoose.model(Chapter.name, ChapterSchema);
  await model.deleteMany();
  return await model.insertMany(chapters);
};

import * as mongoose from 'mongoose';
import { ChapterDocument } from '../../src/chapters/chapter.model';
import { MangaDocument } from '../../src/manga/manga.model';
import { Profile, ProfileSchema } from '../../src/profiles/profile.model';

export const seedProfiles = async (
  readChapters: ChapterDocument[],
  followedManga: MangaDocument[],
) => {
  const profiles: Readonly<Profile[]> = [
    {
      name: 'kilian',
      email: 'kilian.panot@gmail.com',
      _createdAt: new Date(),
      _updatedAt: new Date(),
      followedManga,
      followedSeries: [],
      readChapters,
    },
  ];

  const model = mongoose.model(Profile.name, ProfileSchema);
  await model.deleteMany();
  return await model.insertMany(profiles);
};

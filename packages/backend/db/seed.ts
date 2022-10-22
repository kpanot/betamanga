import * as mongoose from 'mongoose';
import { seedAuthors } from './mocks/authors';
import { seedChapters } from './mocks/chapters';
import { seedMangas } from './mocks/mangas';
import { seedProfiles } from './mocks/profiles';
import { seedUsers } from './mocks/users';
import { seedVolumes } from './mocks/volumes';

void (async () => {
  const db = await mongoose.connect(process.env.MONGODB_URL);

  const authors = await seedAuthors();
  const mangas = await seedMangas(authors);
  const chapters = await seedChapters(mangas[0]);
  await seedVolumes(chapters.slice(0, 2), chapters.slice(3));

  const [profile] = await seedProfiles(
    chapters.slice(0, 1),
    mangas.slice(0, 1),
  );
  await seedUsers(profile);

  await db.connection.close();
})();

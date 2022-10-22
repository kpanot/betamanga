import * as mongoose from 'mongoose';
import { Author, AuthorSchema } from '../../src/authors/author.model';

export const seedAuthors = async () => {
  const authors: Readonly<Author[]> = [
    {
      firstName: 'Eiichiro',
      lastName: 'Oda',
      gender: 'male',
      birthDate: new Date('1975-01-01'),
      _createdAt: new Date(),
      _updatedAt: new Date(),
    },
  ];
  const model = mongoose.model(Author.name, AuthorSchema);
  await model.deleteMany();
  return await model.insertMany(authors);
};

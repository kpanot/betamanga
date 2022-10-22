import * as mongoose from 'mongoose';
import {
  Publisher,
  PublisherSchema,
} from '../../src/publishers/publisher.model';

export const seedPublishers = async () => {
  const Publishers: Readonly<Publisher[]> = [
    {
      name: 'Shueisha',
      country: 'JP',
      _createdAt: new Date(),
      _updatedAt: new Date(),
    },
  ];

  const model = mongoose.model(Publisher.name, PublisherSchema);
  await model.deleteMany();
  return await model.insertMany(Publishers);
};

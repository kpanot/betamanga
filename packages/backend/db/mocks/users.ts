import * as mongoose from 'mongoose';
import { hashSync } from 'bcryptjs';
import { User, UserSchema } from '../../src/users/user.model';
import { Profile } from '../../src/profiles/profile.model';

export const seedUsers = async (profile: Profile) => {
  const users: Readonly<User[]> = [
    {
      name: profile.name,
      password: hashSync('test', 16),
      profile,
      _createdAt: new Date(),
      _updatedAt: new Date(),
    },
  ];
  const model = mongoose.model(User.name, UserSchema);
  await model.deleteMany();
  await model.insertMany(users);
};

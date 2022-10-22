import * as mongoose from 'mongoose';
import { Chapter } from '../../src/chapters/chapter.model';
import { Volume, VolumeSchema } from '../../src/volumes/volume.model';

export const seedVolumes = async (
  chapters1: Chapter[],
  chapters2: Chapter[],
) => {
  const Volumes: Readonly<Volume[]> = [
    {
      chapters: chapters1,
      type: 'book',
      country: 'JP',
      number: 1,
      title: 'Romance Dawn',
      synopsis: `Seven-year-old Monkey D. Luffy tries to join "Red-Haired" Shanks' pirate crew, but is rejected as too young. He accidentally eats a devil fruit which causes his body to gain the properties of rubber, but makes him unable to swim. After an ordeal with mountain bandits, Luffy abandons his plan to join Shanks' crew; instead, he vows to surpass Shanks, build up a crew of his own and become the next king of the pirates. Ten years later Luffy sets out to sea, frees the young Coby from a slave's life in Alvida's pirate crew and saves three-sword-wielding bounty hunter Roronoa Zoro from being executed by the Navy. With Zoro Luffy's first crewman, they set sail for the Grand Line (the sea where the One Piece – the treasure of the last king of the pirates – is supposedly hidden), and meet thief (and expert navigator) Nami.`,
      releaseDate: new Date(1997, 12, 24),
      _createdAt: new Date(),
      _updatedAt: new Date(),
    },
    {
      chapters: chapters2,
      type: 'book',
      country: 'JP',
      number: 2,
      title: 'Buggy the Clown',
      synopsis: `Luffy begs Nami to become a pirate and his crew's navigator, but she refuses and uses him as bait to steal the treasure of pirate captain Buggy the Clown. As Luffy and Zoro fight the Buggy Pirates, Buggy is found to have the power of a devil fruit which allows him to separate his body parts at will. With Buggy's crewmen defeated, Luffy fights him one-on-one.`,
      releaseDate: new Date(1998, 4, 3),
      _createdAt: new Date(),
      _updatedAt: new Date(),
    },
  ];
  const model = mongoose.model(Volume.name, VolumeSchema);
  await model.deleteMany();
  return await model.insertMany(Volumes);
};

import { resolve } from 'node:path';

export const openApiSpecificationFilePath = resolve(
  __dirname,
  '..',
  '..',
  'open-api.json',
);

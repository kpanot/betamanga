module.exports = {
  extends: ['../../.eslintrc.js'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['tsconfig.build.json', 'tsconfig.seed.json'],
  },
};

const jestPreset = require('rocket-punch/jest-preset');

module.exports = {
  ...jestPreset,

  collectCoverageFrom: [
    ...jestPreset.collectCoverageFrom,
    // add list that exclude from coverage if you need
    // '!src/some-directory/**',
  ],

  // patch next.js isolatedModules
  globals: {
    'ts-jest': {
      ...jestPreset.globals['ts-jest'],
      isolatedModules: true,
    },
  },
};

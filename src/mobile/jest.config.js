module.exports = {
  preset: '@react-native/jest-preset',
  moduleNameMapping: {
    '^@shared/(.*)$': '<rootDir>/../shared/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};

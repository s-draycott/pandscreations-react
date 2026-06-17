module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.ts'], // only run files inside __tests__ ending with .test.ts
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};

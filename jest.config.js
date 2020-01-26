
module.exports = {
  projects: [
    {
      displayName: 'test',
      collectCoverage: true,
      preset: 'jest-preset-angular',
      roots: ['<rootDir>/src'],
      testPathIgnorePatterns: ['<rootDir>/src/test.ts'],
      setupFilesAfterEnv: ['<rootDir>/src/test.ts'],
    },
  ]
}

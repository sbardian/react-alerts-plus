module.exports = {
  collectCoverage: true,
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: ['/lib/', '/node_modules/'],
  testPathIgnorePatterns: ['/lib/'],
  modulePathIgnorePatterns: ['<rootDir>/lib/'],
  testEnvironment: 'node',
  moduleDirectories: ['node_modules', 'test-utils'],
};

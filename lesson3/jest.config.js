/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
  preset: 'ts-jest',
  "collectCoverage": true,
  "collectCoverageFrom": ["./src/**/lib.ts"],
  "coverageReporters": ["text", "lcov", "html"],
  "coverageThreshold": {
    "global": {
      "lines": 80,
      "branches": 80,
      "statements": 80,
      "functions": 80
    }
  },
  testMatch:["**/*.test.ts"]
};
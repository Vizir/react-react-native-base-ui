module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json"
    }
  },
  testRegex: "(tests/.*spec)\\.(ts|tsx)$",
  moduleDirectories: ["<rootDir>/src", "node_modules", "<rootDir>/tests"],
  setupFilesAfterEnv: ["./tests/setup.js"],
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
    "^#/(.*)$": "<rootDir>/tests/$1"
  }
};

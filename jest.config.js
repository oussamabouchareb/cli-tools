module.exports = {
  preset: "ts-jest",
  testEnvironement: "node",
  testRegex: "(test/.*\\.spec\\.ts)",
  coverageProvider: "v8",
  globals: {
    "ts-jest": {
      tsconfig: "./test/tsconfig.json",
    },
  },
};
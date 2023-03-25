/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  exclude: [
    "node_modules",
    "public_html",
    "test",
    "**/*.spec.ts",
    "**/*.test.ts",
  ],
};

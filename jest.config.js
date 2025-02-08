module.exports = {
    testEnvironment: 'jest-environment-jsdom', // Explicitly point to the jsdom environment
    transform: {
      '^.+\\.js$': 'babel-jest', // Tells Jest to use Babel for JavaScript files
    },
    testMatch: [
      "**/*.test.js", // Match any files ending with .test.js
    ]
  };
  
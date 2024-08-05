module.exports = {
    roots: ['<rootDir>/src'],
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    testMatch: ['**/components/__tests__/**/*.test.js'],
    transform: {
        '^.+\\.(js|jsx)?$': 'babel-jest',
    },
    transformIgnorePatterns: ['/node_modules/'],
};
module.exports = {
    verbose: true,
    rootDir: './test',
    setupFilesAfterEnv: [
      'jest-allure/dist/setup'
    ],
    reporters: ['default', 'jest-allure']
  }
  
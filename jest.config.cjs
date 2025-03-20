module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json',
        isolatedModules: true,
        jsx: 'react-jsx',
        diagnostics: {
          ignoreCodes: [2322, 2339, 2769, 6133]
        }
      },
    ],
  },
};
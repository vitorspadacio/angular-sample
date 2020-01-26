module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    '@typescript-eslint/tslint'
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: ['airbnb-base'],
  rules: {
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/no-unused-vars': ['error'],
    'import/extensions': [0],
    'import/prefer-default-export': [0],
    'semi': ['error', 'never'],
  },
  env: { browser: true, jest: true },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts']
      }
    }
  }
}
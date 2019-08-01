module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended', // uses typescript-specific linting rules
    'plugin:react/recommended', // uses react-specific linting rules
    'plugin:prettier/recommended', // enables eslint-plugin-prettier and eslint-config-prettier
    'prettier/react', // disables react-specific linting rules that conflict with prettier
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
    tsconfigRootDir: './',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'always',
    //   '@typescript-eslint/no-explicit-any': 'always',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/member-delimiter-style': {
      delimiter: 'none',
      requireLast: true,
    },
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    // '@typescript-eslint/camelcase': 'off',
    'react/prop-types': 'off',
    'react/display-name': [{ ignoreTranspilerName: true }],
    //   "@typescript-eslint/camelcase": ["error", { "properties": "always" }]
  },
};

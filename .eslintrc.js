module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
    tsconfigRootDir: './',
  },
  env: {
    browser: true,
    'jest/globals': true,
  },
  plugins: ['@typescript-eslint', 'react-hooks', 'jest', 'react', 'prettier'],
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
    react: {
      version: 'detect',
    },
  },

  rules: {
    'import/named': 'off',
    'import/export': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: false, optionalDependencies: false, peerDependencies: false },
    ],
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/camelcase': ['error', { properties: 'never' }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-wrap-multilines': 'off',
    camelcase: 'off',
    'func-names': ['error', 'as-needed'],
    'object-shorthand': 'off',
    'no-unused-expressions': [
      'warn',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    // 'prettier/prettier': [
    //   'error',
    //   {
    //     singleQuote: true,
    //     semi: false
    //   }
    // ]
  },
};

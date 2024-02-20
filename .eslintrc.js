const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error',
};

module.exports = {
  settings: {
    'import/extensions': [ '.js', '.jsx', '.ts', '.tsx' ],
    'import/parsers': {
      '@typescript-eslint/parser': [ '.ts', '.tsx' ],
    },
    'import/resolver': {
      node: {
        extensions: [ '.js', '.jsx', '.ts', '.tsx' ],
      },
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  globals: {
    JSX: true,
  },
  extends: ['eslint:recommended',  "next",  'plugin:react/recommended', 'airbnb', 'airbnb-typescript' ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: [ 'react', 'react-hooks', '@typescript-eslint', 'jest' ],
  rules: {
    'react/jsx-filename-extension': [
      RULES.ERROR,
      { extensions: [ '.js', '.jsx', '.ts', '.tsx' ]},
    ],
    'react/react-in-jsx-scope': RULES.OFF,
    'react/function-component-definition': RULES.OFF, // Disabled airbnb function component in jsx| tsx
    'react/jsx-curly-spacing': [
      RULES.ERROR,
      {
        when: 'never',
        allowMultiline: false,
      },
    ],
    'import/extensions': [
      RULES.ERROR,
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'array-bracket-spacing': [
      RULES.ERROR,
      'always',
      { singleValue: true, objectsInArrays: false, arraysInArrays: false },
    ],
    'object-curly-spacing': [
      RULES.ERROR,
      'always',
      { objectsInObjects: true, arraysInObjects: true},
    ],
    'no-unused-expressions': [ RULES.ERROR, { allowShortCircuit: true }],
    // Change the linebreak-style to CF (/n), Need to change in Settings "end of line" select \n
    'linebreak-style': [ RULES.ERROR, 'unix' ],
    // Disabled no-unused-vars in interfaces Typescript
    'no-unused-vars': RULES.OFF,
    '@typescript-eslint/no-unused-vars': [ RULES.ERROR ],
    "@typescript-eslint/object-curly-spacing": RULES.OFF, //Note: you must disable the base rule as it can report incorrect errors.
    'no-param-reassign': [
      RULES.ERROR,
      { props: true, ignorePropertyModificationsFor: [ 'state', 'e' ]},
    ],
    'jsx-a11y/label-has-associated-control': RULES.OFF,
    'react/jsx-props-no-spreading': RULES.OFF,
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'import/no-extraneous-dependencies': [ RULES.ERROR, { devDependencies: true }],
    'no-underscore-dangle': RULES.OFF,
  },
};

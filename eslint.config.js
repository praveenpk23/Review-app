// import js from '@eslint/js'
// import globals from 'globals'
// import reactHooks from 'eslint-plugin-react-hooks'
// import reactRefresh from 'eslint-plugin-react-refresh'

// export default [
//   { ignores: ['dist'] },
//   {
//     files: ['**/*.{js,jsx}'],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//       parserOptions: {
//         ecmaVersion: 'latest',
//         ecmaFeatures: { jsx: true },
//         sourceType: 'module',
//       },
//     },
//     plugins: {
//       'react-hooks': reactHooks,
//       'react-refresh': reactRefresh,
//     },
//     rules: {
//       ...js.configs.recommended.rules,
//       ...reactHooks.configs.recommended.rules,
//       'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
//       'react-refresh/only-export-components': [
//         'warn',
//         { allowConstantExport: true },
        
//       ],

//     },
//   },
// ]


import js from '@eslint/js';
import jsx from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import parserBabel from '@babel/eslint-parser';

export default [
  {
    languageOptions: {
      parser: parserBabel,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        requireConfigFile: false,
      },
    },
    plugins: {
      react: jsx,
      reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // 💣 disable or fine-tune unused-vars
      'no-unused-vars': ['warn', {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_'
      }],

      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
];

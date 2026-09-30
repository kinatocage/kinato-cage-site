import globals from 'globals';

export default [
  {
    files: ['cage_mitumori/src/**/*.js', 'cage_mitumori/*.js'],
    ignores: ['cage_mitumori/dist/**'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
        THREE: 'readonly',
        materialsConfig: 'readonly',
        creaturePresets: 'readonly',
        viewer: 'readonly'
      }
    },
    rules: {
      'no-undef': 'error',
      'no-unused-vars': 'off'
    }
  }
];

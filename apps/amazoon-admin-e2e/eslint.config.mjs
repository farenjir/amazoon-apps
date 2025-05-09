import cypress from 'eslint-plugin-cypress/flat';
import baseConfig from '../../eslint.config.mjs';

export default [
  ...baseConfig,
  cypress.configs['recommended'],
  {
    // Override or add rules here
    rules: {},
  },
];

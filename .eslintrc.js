const baseConfig = require('lyne-helper-eslint-config');

baseConfig.globals = {
  Atomics: 'readonly',
  SharedArrayBuffer: 'readonly'
};

baseConfig.plugins = [
  'vue',
  'gridsome',
  'yaml'
];

baseConfig.extends = [
  'plugin:vue/essential',
  'airbnb-base'
];

module.exports = baseConfig;

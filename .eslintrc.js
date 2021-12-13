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

baseConfig.rules['sort-imports'] = [
  'error',
  {
    ignoreCase: true,
    ignoreDeclarationSort: true,
    ignoreMemberSort: false,
    memberSyntaxSortOrder: [
      'none',
      'all',
      'multiple',
      'single'
    ]
  }
];

baseConfig.rules['vue/multi-word-component-names'] = 'off';

module.exports = baseConfig;

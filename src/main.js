import DefaultLayout from './layouts/Default.vue';

const globalConfig = require('../global.config');

export default function (Vue) {
  Vue.component('Layout', DefaultLayout);

  // make sure that vue is not complaining about unknown custom element
  const ignoreRegex = new RegExp(`${globalConfig.lyneComponentsPrefix}w*`, 'u');

  /* eslint-disable no-param-reassign */
  Vue.config.ignoredElements = [ignoreRegex];
  /* eslint-enable no-param-reassign */
}

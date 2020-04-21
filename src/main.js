import DefaultLayout from '~/layouts/Default.vue';
const globalConfig = require('../global.config');

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)

  // make sure that vue is not complaining about unknown custom element
  const ignoreRegex = new RegExp(`${globalConfig.lyneComponentsPrefix}\w*`);
  Vue.config.ignoredElements = [ignoreRegex];
}

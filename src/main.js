import 'buefy/dist/buefy.css';
import Buefy from 'buefy';
import DefaultLayout from './layouts/Default.vue';

const globalConfig = require('../global.config');

export default (Vue, {
  head
}) => {

  // add <html> attributes
  /* eslint-disable no-param-reassign */
  head.htmlAttrs = {
    lang: 'en'
  };
  /* eslint-enable no-param-reassign */

  // define layout component
  Vue.component('Layout', DefaultLayout);

  // Register Bulma
  Vue.use(Buefy);

  // make sure that vue is not complaining about unknown custom element
  const ignoreRegex = new RegExp(`${globalConfig.lyneComponentsPrefix}w*`, 'u');

  /* eslint-disable no-param-reassign */
  Vue.config.ignoredElements = [ignoreRegex];
  /* eslint-enable no-param-reassign */

  head.meta.push({
    content: 'viewport',
    name: 'width=device-width, initial-scale=1'
  });
};

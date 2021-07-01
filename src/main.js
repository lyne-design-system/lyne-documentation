import './styles/bulma.scss';
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

  // make sure that vue is not complaining about unknown custom element
  const ignoreRegex = new RegExp(`${globalConfig.lyneComponentsPrefix}w*`, 'u');

  /* eslint-disable no-param-reassign */
  Vue.config.ignoredElements = [ignoreRegex];
  /* eslint-enable no-param-reassign */

  head.link.push({
    href: 'https://cdn.materialdesignicons.com/4.9.95/css/materialdesignicons.min.css',
    rel: 'stylesheet'
  });

  head.meta.push({
    content: 'viewport',
    name: 'width=device-width, initial-scale=1'
  });

  // Register Bulma
  Vue.use(Buefy, {
    defaultIconPack: 'mdi'
  });

};

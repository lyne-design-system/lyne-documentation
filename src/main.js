import { defineCustomElements } from 'lyne-test/loader';
import CustomBuefy from './customBuefy';
import DefLayout from './layouts/Default.vue';

const globalConfig = require('../global.config');

export default (Vue, {
  head
}) => {

  defineCustomElements();

  // add <html> attributes
  /* eslint-disable no-param-reassign */
  head.htmlAttrs = {
    lang: 'en',
    mode: 'shared'
  };
  /* eslint-enable no-param-reassign */

  // define layout component
  Vue.component('Layout', DefLayout);

  // make sure that vue is not complaining about unknown custom element
  const ignoreRegex = new RegExp(`${globalConfig.lyneComponentsPrefix}w*`, 'u');

  /* eslint-disable no-param-reassign */
  Vue.config.ignoredElements = [ignoreRegex];
  /* eslint-enable no-param-reassign */

  head.link.push({
    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@4.9.95/css/materialdesignicons.min.css',
    rel: 'stylesheet'
  });

  head.link.push({
    as: 'font',
    crossOrigin: '',
    href: 'https://cdn.app.sbb.ch/fonts/v1_6_subset/SBBWeb-Roman.woff2',
    rel: 'preload',
    type: 'font/woff2'
  });

  head.link.push({
    as: 'font',
    crossOrigin: '',
    href: 'https://cdn.app.sbb.ch/fonts/v1_6_subset/SBBWeb-Bold.woff2',
    rel: 'preload',
    type: 'font/woff2'
  });

  head.link.push({
    as: 'style',
    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@4.9.95/css/materialdesignicons.min.css',
    rel: 'preload',
    type: 'text/css'
  });

  head.link.push({
    as: 'font',
    crossOrigin: '',
    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@4.9.95/fonts/materialdesignicons-webfont.woff2?v=4.9.95',
    rel: 'preload',
    type: 'font/woff2'
  });

  head.meta.push({
    content: 'noindex, nofollow',
    name: 'robots'
  });

  head.meta.push({
    content: 'width=device-width, initial-scale=1',
    name: 'viewport'
  });

  // Init buefy
  Vue.use(CustomBuefy);

};

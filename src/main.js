import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
  Vue.config.ignoredElements = [/lyne-\w*/];

  head.script.push({
    src: 'https://unpkg.com/lyne-test/dist/lyne-components/lyne-components.esm.js',
    body: false,
    type: 'module'
  })

  head.script.push({
    src: 'https://unpkg.com/lyne-test/dist/lyne-components/lyne-components.js',
    body: false,
    nomodule: ''
  })
}

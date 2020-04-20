import DefaultLayout from '~/layouts/Default.vue'
import { defineCustomElements } from 'lyne-test/loader';

defineCustomElements();

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
}

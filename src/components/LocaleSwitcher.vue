<template>

  <div
    class="dropdown"
    v-bind:class="{'is-active': showDropdown}"
  >
    <div class="dropdown-trigger">
      <button
        class="button"
        aria-haspopup="true"
        aria-controls="dropdown-menu"
        @click="toggleDropdown"
      >
        <span>{{currentLocale}}</span>
        <span class="icon is-small">
          <b-icon
            aria-hidden="true"
            :icon="showDropdown ? 'menu-up' : 'menu-down'"
          ></b-icon>
        </span>
      </button>
    </div>
    <div
      class="dropdown-menu"
      role="menu"
    >
      <div class="dropdown-content">
        <a
          v-for="locale in availableLocales"
          :key="locale"
          href="#"
          class="dropdown-item"
          v-bind:class="{'is-active': locale === currentLocale}"
          @click="localeChanged(locale)"
        >
          {{locale}}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
const paths = require('../i18n/paths');

export default {
  data: (comp) => ({
    availableLocales: comp._i18n.availableLocales,
    currentLocale: comp._i18n.locale.toString(),
    pathObject: paths[comp._i18n.locale.toString()],
    showDropdown: false
  }),
  methods: {
    localeChanged (locale) {

      this.showDropdown = false;

      if (locale === this.currentLocale) {
        return;
      }

      const desiredPath = this.$tp(this.$route.path, locale, true);

      window.location.replace(desiredPath);
    },
    toggleDropdown () {
      this.showDropdown = !this.showDropdown;
    }
  },
  name: 'LocaleSwitcher'
};

</script>

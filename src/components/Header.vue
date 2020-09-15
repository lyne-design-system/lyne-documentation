<template>

  <header>

    <nav
      class="navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="/"
        >
          <img src="../favicon.png">
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          v-bind:class="{'is-active': showMenu}"
          aria-label="menu"
          aria-expanded="false"
          @click="menuClick">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        class="navbar-menu"
        v-bind:class="{'is-active': showMenu}"
      >

        <div class="navbar-start">

          <g-link
            class="navbar-item"
            v-for="(link) in $data.navLinks"
            :to="$tp(link.path)"
            :key="link.path"
          >{{link.title}}</g-link>

        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import LocaleSwitcher from './LocaleSwitcher.vue';

const paths = require('../i18n/paths');

const getNavLinks = (locale) => {
  const langObjects = paths[locale];
  const {
    components,
    deployments,
    home,
    playground,
    designTokens,
    icons
  } = langObjects;

  return [
    home,
    components,
    deployments,
    playground,
    designTokens,
    icons
  ];
};

export default {
  components: {
    LocaleSwitcher
  },
  data: (comp) => {
    const locale = comp._i18n.locale.toString();

    return {
      navLinks: getNavLinks(locale),
      showMenu: false
    };
  },
  methods: {
    menuClick () {
      this.showMenu = !this.showMenu;
    },
    onClickChild (locale) {
      this.navLinks = getNavLinks(locale);
    }
  },
  name: 'Header'
};

</script>

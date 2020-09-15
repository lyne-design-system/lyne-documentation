<template>

  <header>
    <nav>
      <g-link
        v-for="(link) in $data.navLinks"
        :to="$tp(link.path)"
        :key="link.path"
      >{{link.title}}</g-link>

      <LocaleSwitcher
        @clicked="onClickChild"
      />

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
      navLinks: getNavLinks(locale)
    };
  },
  methods: {
    onClickChild (locale) {
      this.navLinks = getNavLinks(locale);
    }
  },
  name: 'Header'
};

</script>

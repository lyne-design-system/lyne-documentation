<template>

  <header>

    <nav
      class="navbar is-info"
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
          :aria-expanded="showMenu"
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
            exact-active-class="is-active"
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
const paths = require('../i18n/paths');

export default {
  data: (comp) => {
    const locale = comp._i18n.locale.toString();

    return {
      navLinks: paths[locale],
      showMenu: false
    };
  },
  methods: {
    menuClick () {
      this.showMenu = !this.showMenu;
    }
  },
  name: 'Header'
};

</script>

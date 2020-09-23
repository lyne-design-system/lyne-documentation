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
          <span class="brand-title">Lyne Design System</span>
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
    </nav>
  </header>
</template>

<script>
import eventBus from '../helpers/eventBus';

export default {
  created() {
    eventBus.bus.addEventListener(eventBus.names.toggleMenu, (event) => {
      const {
        showMenu
      } = event.detail;

      this.showMenu = showMenu;
    });
  },
  data() {
    const exportData = {
      showMenu: false
    };

    return exportData;
  },
  methods: {
    menuClick () {
      this.showMenu = !this.showMenu;

      eventBus.bus.dispatchEvent(eventBus.names.toggleMenu, {
        showMenu: this.showMenu
      });
    }
  },
  name: 'Header'
};

</script>

<style lang="scss">
.navbar-item {
  order: 1;
}

.navbar-burger.burger {
  order: 0;
  margin-left: 0;
}

.brand-title {
  display: block;
  margin-left: 1rem;
}

</style>

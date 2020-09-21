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
    </nav>
  </header>
</template>

<script>
import eventBus from '../helpers/eventBus';
import eventNames from '../helpers/eventNames';

export default {
  created() {
    eventBus.addEventListener(eventNames.toggleMenu, (event) => {
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

      eventBus.dispatchEvent(eventNames.toggleMenu, {
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

.navbar-burger {
  order: 0;
  margin-left: 0;
}

</style>

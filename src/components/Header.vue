<template>

  <header>

    <nav
      class="navbar is-white"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="/"
        >
          <lyne-sbb-logo protecitve-room="minimal" />
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
@import "../styles/bulma.scss";

.navbar {
  align-items: center;
}

.navbar .navbar-brand {
  justify-content: space-between;
  align-items: center;
  flex: 1;

  @include from($desktop) {
    justify-content: flex-end;
  }
}

.navbar .navbar-item {

}

.navbar .navbar-item {
  order: 2;
  flex-basis: 190px;
  padding: 0;
}

.navbar .navbar-item lyne-sbb-logo {
  display: block;
  width: 100%;
}

.navbar .brand-title {
  display: block;
  margin-left: 1rem;
}

.navbar .navbar-burger.burger {
  order: 1;
  margin-left: 1rem;
}

</style>

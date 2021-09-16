<template>

  <header>

    <nav
      class="navigation"
      role="navigation"
      aria-label="main navigation"
    >
      <button
        class="navigation-menu-button"
        v-bind:class="{'is-active': showMenu}"
        aria-label="menu"
        :aria-expanded="showMenu"
        @click="menuClick"
      >

          <ButtonIcon
            v-if="!showMenu"
            class="button-icon"
          />

          <CloseIcon
            v-if="showMenu"
            class="button-icon"
          />

          <span class="button-text">Menu</span>
      </button>

      <a
        class="navigation-logo"
        href="/"
      >
        <lyne-sbb-logo protective-room="none" />
      </a>
    </nav>
  </header>
</template>

<script>
import ButtonIcon from 'lyne-icons/dist/icons/hamburger-menu-small.svg';
import CloseIcon from 'lyne-icons/dist/icons/cross-small.svg';
import eventBus from '../helpers/eventBus';

export default {
  components: {
    ButtonIcon,
    CloseIcon
  },
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

<style lang="scss" scoped>
@import "~/src/styles/bulma";
@import "~/node_modules/lyne-design-tokens/dist/scss/variables.scss";
@import "~/src/styles/mixins";

.navigation {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 72px;

  @include from($desktop) {
    height: 79px;
    justify-content: flex-end;
  }
}

.navigation-logo {
  display: block;
  flex-basis: 213px;
  flex-shrink: 0;
  flex-grow: 0;
  margin-right: 12px;
  padding: 12px;
}

.navigation-logo:hover {
  background-color: $color-milk-default;
}

.navigation-menu-button {
  @include buttonReset;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
  padding: 12px;
  font-size: 14px;

  @include from($desktop) {
    display: none;
  }
}

.navigation-menu-button:hover {
  background-color: $color-milk-default;
}

.button-text {
  display: block;
  height: 24px;
  line-height: 24px;
}

.button-icon {
  flex-basis: 24px;
  height: 24px;
  margin-right: 4px;
}

</style>

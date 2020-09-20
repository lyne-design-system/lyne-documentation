<template>
  <ul
    class="menu"
    v-bind:class="{hidden: !$data.showMenu}"
  >
    <NavigationItem
      v-for="(item, index) in $data.navData"
      :key="index"
      :item="item"
    ></NavigationItem>
  </ul>
</template>

<script>
import eventBus from '../../helpers/eventBus';
import navData from '../../navigation';
import NavigationItem from './NavigationItem.vue';

export default {
  components: {
    NavigationItem
  },
  created () {
    eventBus.addEventListener('toggle-menu', (event) => {
      const {
        showMenu
      } = event.detail;

      this.showMenu = showMenu;
    });
  },
  data: () => {
    const data = {
      navData,
      showMenu: false
    };

    return data;
  },
  methods: {
    toggle () {
      console.log('toggle');
    }
  },
  name: 'Navigation'
};

</script>

<style lang="scss">
  @import "~bulma/sass/utilities/_all";
  .menu {
    display: block;
  }

  .menu.hidden {
    display: none;

    @include desktop {
      display: block;
    }
  }
</style>

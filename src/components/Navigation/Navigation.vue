<template>
  <ul
    class="menu"
    v-bind:class="{hidden: !$data.showMenu}"
  >
    <NavigationItem
      v-for="(item, index) in $data.navData"
      :key="index"
      :item="item"
      :paths="$data.paths"
    ></NavigationItem>
  </ul>
</template>

<script>
import eventBus from '../../helpers/eventBus';
import navData from '../../navigation';
import NavigationItem from './NavigationItem.vue';

const getPathOfNavItem = (obj, search) => {
  for (const item of Object.entries(obj)) {
    const value = item[1];

    if (value === search) {
      // return [key];
      return [value];
    }

    if (value && typeof value === 'object') {
      const path = getPathOfNavItem(value, search);

      if (path) {
        if (value.path) {
          return [
            value.path,
            ...path
          ];
        }

        return path;
      }
    }
  }

  return false;
};

export default {
  components: {
    NavigationItem
  },
  data() {
    const parentPathsOfCurrentRoute = getPathOfNavItem(navData, this.$route.path);

    const data = {
      navData,
      paths: parentPathsOfCurrentRoute,
      showMenu: false
    };

    return data;
  },
  methods: {
    toggle () {
      console.log('toggle');
    }
  },
  mounted () {
    eventBus.addEventListener('toggle-menu', (event) => {
      const {
        showMenu
      } = event.detail;

      this.showMenu = showMenu;
    });
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

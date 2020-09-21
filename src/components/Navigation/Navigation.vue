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

<static-query>
query {
  component: lyne {
    allComponents {
      title
      componentName
    }
  }
}
</static-query>

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
  created() {
    const components = this.$static.component.allComponents;
    const navDataCopy = JSON.parse(JSON.stringify(navData));
    let indexOfCompNavItem = 0;

    navDataCopy.forEach((navItem, index) => {
      if (navItem.path === '/components/') {
        indexOfCompNavItem = index;
      }
    });

    components.forEach((comp) => {
      navDataCopy[indexOfCompNavItem].children.push({
        name: comp.title,
        path: `/components/${comp.componentName}`
      });
    });

    this.navData = navDataCopy;
    this.paths = getPathOfNavItem(navDataCopy, this.$route.path);
  },
  data() {
    const data = {
      navData: [],
      paths: [],
      showMenu: false
    };

    return data;
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
  @import "../../styles/bulma.scss";

  .menu {
    display: block;
    margin: 0;
    background: $background;
    padding: 1rem 1rem;
  }

  .menu.hidden {
    display: none;

    @include desktop {
      display: block;
    }
  }
</style>

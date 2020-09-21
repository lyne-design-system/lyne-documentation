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

const addComponentNavItems = (components, _navData) => {
  const navDataCopy = JSON.parse(JSON.stringify(_navData));
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

  return navDataCopy;
};

export default {
  components: {
    NavigationItem
  },
  created() {
    this.navData = addComponentNavItems(this.$static.component.allComponents, navData);
    this.paths = getPathOfNavItem(this.navData, this.$route.path);

    eventBus.bus.addEventListener(eventBus.names.toggleMenu, (event) => {
      const {
        showMenu
      } = event.detail;

      this.showMenu = showMenu;
    });
  },
  data() {
    const data = {
      navData: [],
      paths: [],
      showMenu: false
    };

    return data;
  },
  name: 'Navigation',
  watch: {
    $route () {
      eventBus.bus.dispatchEvent(eventBus.names.toggleMenu, {
        showMenu: false
      });
    }
  }
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

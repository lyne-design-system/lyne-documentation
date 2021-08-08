<template>
  <div
    v-bind:class="{hidden: !$data.showMenu}"
    class="menu"
  >
    <Search class="search" />
    <ul>
      <NavigationItem
        v-for="(item, index) in $data.navData"
        :key="index"
        :item="item"
        :paths="$data.paths"
      ></NavigationItem>
    </ul>
  </div>
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
import {
  addLevelsToNavItems,
  getPathOfNavItem
} from '../../helpers/navigation';
import eventBus from '../../helpers/eventBus';
import navData from '../../navigation';
import NavigationItem from './NavigationItem.vue';
import Search from '../Search.vue';

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
    NavigationItem,
    Search
  },
  created() {
    const navWithComps = addComponentNavItems(this.$static.component.allComponents, navData);

    this.navData = addLevelsToNavItems(navWithComps);
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
    padding: 1rem 1rem;
    background: $background;
  }

  .menu.hidden {
    display: none;

    @include desktop {
      display: block;
    }
  }

  .search {
    margin-bottom: 1rem;
  }

</style>

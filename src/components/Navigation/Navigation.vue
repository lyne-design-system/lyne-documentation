<template>
  <div v-bind:class="{ hidden: !$data.showMenu }" class="menu">
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

<script>
import componentItems from '@sbb-esta/lyne-components/dist/collection/storybundle/components.json';
import { addLevelsToNavItems, getPathOfNavItem } from '../../helpers/navigation';
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
      name: comp,
      path: `/components/${comp}`,
    });
  });

  return navDataCopy;
};

export default {
  components: {
    NavigationItem,
    Search,
  },
  created() {
    const navWithComps = addComponentNavItems(componentItems.components, navData);

    this.navData = addLevelsToNavItems(navWithComps);
    this.paths = getPathOfNavItem(this.navData, this.$route.path);

    eventBus.bus.addEventListener(eventBus.names.toggleMenu, (event) => {
      const { showMenu } = event.detail;

      this.showMenu = showMenu;
    });
  },
  data() {
    const data = {
      navData: [],
      paths: [],
      showMenu: false,
    };

    return data;
  },
  name: 'Navigation',
  watch: {
    $route() {
      eventBus.bus.dispatchEvent(eventBus.names.toggleMenu, {
        showMenu: false,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/src/styles/index';

.menu.column {
  display: block;
  padding: 1.5rem 0.5rem 1rem;
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

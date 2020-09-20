<template>
  <ul
    class="menu"
    v-bind:class="{hidden: !$data.showMenu}"
  >
    <NavigationItem
      v-for="(item, index) in $data.treeData"
      :key="index"
      :item="item"
    ></NavigationItem>
  </ul>
  <!--
  <aside class="menu">

    <ul class="menu-list">
      <li
        v-for="(link) in $data.navLinks"
        :key="link.path"
      >
        <g-link
          exact-active-class="is-active"
          :to="$tp(link.path)"
        >{{link.title}}</g-link>
      </li>
    </ul>

    <ul class="menu-list">
      <li>
        <a class="">
          <span @click="menuClick">
            Manage Your Team
          </span>
          <span @click="arrowClick" class="icon">
            <i class="mdi mdi-menu-up"></i>
          </span>
        </a>
        <ul>
          <li><a>Members</a></li>
          <li><a>Plugins</a></li>
          <li><a>Add a member</a></li>
        </ul>
      </li>
    </ul>

  </aside>
  -->

</template>

<script>
import eventBus from '../../helpers/eventBus';
import NavigationItem from './NavigationItem.vue';

const treeData = [
  {
    children: [
      {
        name: 'What is Lyne',
        path: '/about/what'
      },
      {
        name: 'Why Lyne',
        path: '/about/why'
      },
      {
        name: 'How we work',
        path: '/about/how'
      }
    ],
    name: 'About Lyne',
    path: '/about'
  },
  {
    children: [
      {
        name: 'Get started',
        path: '/designing/getting-started'
      },
      {
        children: [
          {
            name: 'Sketch',
            path: '/designing/design-kits/sketch'
          },
          {
            name: 'Figma',
            path: '/designing/design-kits/figma'
          }
        ],
        name: 'Design kits',
        path: '/designing/design-kits'
      }
    ],
    name: 'Designing',
    path: '/designing/'
  },
  {
    children: [
      {
        name: 'Color & Font',
        path: '/tokens/tokens'
      },
      {
        name: 'Icons',
        path: '/tokens/icons'
      }
    ],
    name: 'Tokens',
    path: '/tokens/'
  },
  {
    children: [
      {
        name: 'comp1',
        path: '/components/comp1'
      }
    ],
    name: 'Components',
    path: '/components/'
  }
];

/*
const paths = require('../i18n/paths');

const getOnlyVisibleNavLinks = (elements) => {
  const keys = Object.keys(elements);
  const finalObject = {};

  keys.forEach((key) => {
    const path = elements[key];

    if (!path.hideFromNav) {
      finalObject[key] = path;
    }
  });

  return finalObject;
};
*/
export default {
  /*
  data: (comp) => {
    const locale = comp._i18n.locale.toString();
    const navLinks = getOnlyVisibleNavLinks(paths[locale]);

    return {
      navLinks
    };
  },
  methods: {
    arrowClick() {
      console.log('arrow');
    },
    menuClick () {
      console.log('menu');
    }
  },
  */
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
    return {
      showMenu: false,
      treeData
    }
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

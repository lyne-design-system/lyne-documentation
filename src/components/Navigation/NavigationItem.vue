<template>
  <li>
    <div class="nav-item">
      <g-link
        class="link"
        exact-active-class="is-exact-active"
        :to="item.path"
      >
        {{ item.name }}
      </g-link>
      <span
        class="nav-icon"
        v-if="isFolder"
        @click="toggle"
      >
        <i
          class="mdi"
          v-bind:class="{
            'mdi-chevron-down': !isOpen,
            'mdi-chevron-up': isOpen
          }"
        ></i>
      </span>
    </div>
    <ul
      class="sub-menu"
      v-show="isOpen"
      v-if="isFolder"
    >
      <NavigationItem
        v-for="(child, index) in item.children"
        :key="index"
        :item="child"
        :paths="paths"
      ></NavigationItem>
    </ul>
  </li>

</template>

<script>

export default {
  computed: {
    isFolder() {
      return this.item.children && this.item.children.length;
    }
  },
  data() {
    const data = {
      isOpen: false
    };

    return data;
  },
  methods: {
    toggle () {
      if (this.isFolder) {
        this.isOpen = !this.isOpen;
      }
    }
  },
  mounted () {
    let childIsInOpenPath = false;

    if (this.paths) {
      childIsInOpenPath = this.paths.includes(this.item.path);
    }

    this.isOpen = childIsInOpenPath;
  },
  name: 'NavigationItem',
  props: [
    'item',
    'paths'
  ]
};

</script>

<style lang="scss">
@import "../../styles/bulma.scss";

.sub-menu {
  margin-left: 1rem;
  list-style-type: dot;
}

.nav-item {
  position: relative;
}

.nav-icon {
  position: absolute;
  top: 0;
  right: 0;
  width: 2.5rem;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $link;
}

.nav-icon .mdi {
  color: currentColor;
}

.link {
  display: block;
  padding: .7em 3em .7em .7em;
}

.link.is-exact-active {
  background-color: $link;
  color: $link-invert;
}

.link.is-exact-active ~ .nav-icon {
  color: $link-invert;
}

</style>

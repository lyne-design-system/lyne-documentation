<template>
  <li>
    <g-link
      class="link"
      :class="'link--level-' + item.level"
      :to="item.path"
      @click.native="toggle"
    >
      {{ item.name }}

      <span class="link__icon" v-if="isFolder">
        <i
          class="mdi"
          v-bind:class="{
            'mdi-chevron-down': !isOpen,
            'mdi-chevron-up': isOpen,
          }"
        ></i>
      </span>
    </g-link>

    <ul class="sub-menu" v-show="isOpen" v-if="isFolder">
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
    },
  },
  data() {
    const data = {
      isOpen: false,
    };

    return data;
  },
  methods: {
    toggle() {
      if (this.isFolder) {
        this.isOpen = !this.isOpen;
      }
    },
  },
  mounted() {
    let childIsInOpenPath = false;

    if (this.paths) {
      childIsInOpenPath = this.paths.includes(this.item.path);
    }

    this.isOpen = childIsInOpenPath;
  },
  name: 'NavigationItem',
  props: ['item', 'paths'],
};
</script>

<style lang="scss" scoped>
@import '~/src/styles/index';

.sub-menu {
  margin-left: 1rem;
}

.link {
  position: relative;
  display: block;
  padding: 0.3rem 2.5rem 0.3rem 1rem;
  margin: 0.4rem 0;
  color: $sbb-color-black-default;
  border-radius: 100px;
}

.link__icon {
  position: absolute;
  top: 0;
  right: 0;
  width: 2.5rem;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: currentColor;
}

.link__icon .mdi {
  color: currentColor;
}

.link.active {
  background-color: $sbb-color-milk-default;
  color: $sbb-color-granite-default;
}
</style>

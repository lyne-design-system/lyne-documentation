<template>
  <li>
    <div>
      <g-link
        exact-active-class="is-exact-active"
        :to="item.path"
      >
        {{ item.name }}
      </g-link>
      <span
        class="icon"
        v-if="isFolder"
        @click="toggle"
      >
        <i
          class="mdi"
          v-bind:class="{
            'mdi-menu-down': !isOpen,
            'mdi-menu-up': isOpen
          }"
        ></i>
      </span>
    </div>
    <ul
      v-show="isOpen"
      v-if="isFolder"
    >
      <NavigationItem
        v-for="(child, index) in item.children"
        :key="index"
        :item="child"
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
  data: () => {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle () {
      if (this.isFolder) {
        this.isOpen = !this.isOpen;
      }
    }
  },
  name: 'NavigationItem',
  props: ['item']
};

</script>

<style>
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: dot;
}

.is-exact-active {
  font-weight: bold;
}
</style>

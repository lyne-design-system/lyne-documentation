<!-- Master layout -->
<template>
  <div :class="mode">
    <router-view />
    <a href="#" title="toggle mode" @click.prevent="toggleMode">Toggle mode</a>
  </div>
</template>

<script>
export default {

  data() {
    const mode = {
      mode: 'is-mode-detail'
    };

    return mode;
  },
  methods: {
    toggleMode() {
      this.mode = this.mode === 'is-mode-detail'
        ? 'is-mode-beep'
        : 'is-mode-detail';
    }
  }
};

</script>

<style lang="scss">
@import "~/src/styles/index";
</style>

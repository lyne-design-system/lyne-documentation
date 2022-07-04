<!-- Master layout -->
<template>
  <div :class="mode">
    <router-view />
    <a style="padding: 1rem 1.5rem" href="#" title="toggle mode" @click.prevent="toggleMode"
      >To be(ep), or not to be(ep), that is the question!</a
    >
  </div>
</template>

<script>
export default {
  data() {
    const mode = {
      mode: 'is-mode-detail',
    };

    return mode;
  },
  methods: {
    toggleMode() {
      this.mode = this.mode === 'is-mode-detail' ? 'is-mode-beep' : 'is-mode-detail';
    },
  },
};
</script>

<style lang="scss">
@import '~/src/styles/index';
</style>

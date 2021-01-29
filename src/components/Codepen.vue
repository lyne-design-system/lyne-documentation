<template>
  <form
    action="https://codepen.io/pen/define"
    method="POST"
    target="_blank"
  >
    <input
      type="hidden"
      name="data"
      :value="JSON.stringify(contents)"
    >

    <span class="button">
      <input
        class="input-button"
        type="submit"
        value="Edit on Codepen.io"
      >
      <span class="icon is-small">
        <i class="mdi mdi-launch"></i>
      </span>
    </span>
  </form>
</template>

<script>
export default {
  name: 'Codepen',
  props: ['contents']
};
</script>

<style lang="scss" scoped>
.input-button {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  background: none;
  border: none;
  outline: none;
  padding: 0;
  color: currentColor;
  font: inherit;
  cursor: pointer;

}
</style>

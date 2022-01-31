<template>
  <form
    action="https://codepen.io/pen/define"
    method="POST"
    target="_blank"
    ref="form"
    class="codepen-form"
  >
    <input
      type="hidden"
      name="data"
      :value="JSON.stringify(contents)"
    >

    <lyne-button
      label="Edit on Codepen.io"
      variant="secondary"
      type="submit"
      icon="true"
      size="small"
      v-on="{'lyne-button_click': buttonClick}"
    >
      <LinkIcon />
    </lyne-button>

  </form>
</template>

<script>
import LinkIcon from 'lyne-icons/dist/icons/link-external-small.svg';

export default {
  components: {
    LinkIcon
  },
  methods: {
    buttonClick() {
      this.$refs.form.submit();
    }
  },
  name: 'Codepen',
  props: ['contents']
};
</script>

<style lang="scss" scoped>

.codepen-form {
  z-index: -1;
}

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

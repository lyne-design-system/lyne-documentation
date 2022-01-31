<template>
  <form
    action="https://codepen.io/pen/define"
    method="POST"
    target="_blank"
    ref="form"
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

<template>
  <form action="https://codepen.io/pen/define" method="POST" target="_blank" ref="form">
    <input type="hidden" name="data" :value="JSON.stringify(contents)" />

    <sbb-button
      variant="secondary"
      size="m"
      v-on="{ click: buttonClick }"
      icon-name="link-external-small"
    >
      Edit on Codepen.io
    </sbb-button>
  </form>
</template>

<script>
export default {
  methods: {
    buttonClick() {
      this.$refs.form.submit();
    },
  },
  name: 'Codepen',
  props: ['contents'],
};
</script>

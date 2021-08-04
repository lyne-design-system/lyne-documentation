<template>
  <table class="table is-fullwidth">
    <thead>
      <tr>
        <th>Name</th>
        <th>Value</th>
        <th v-if="!hideExampleColumn">Example</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(token, index) in tokens"
        :key="index"
      >
        <td class="textCell">{{ token.fullName }}</td>
        <td class="textCell">{{ token.value }}</td>
        <td v-if="!hideExampleColumn">
          <slot v-bind:token="token"></slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'TokensTable',
  props: [
    'hideExampleColumn',
    'tokens'
  ]
};
</script>

<style lang="scss" scoped>
table td.textCell {
  line-height: 100%;
  vertical-align: middle;
}

</style>

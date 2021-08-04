<template>
  <div
    class="shadow"
    :style="getShadowStyle()"
  >

    <div
      v-for="(key, index) in Object.keys(shadows)"
      :key="index"
    >

      <p>Shadow {{key}}</p>
      <b-field grouped group-multiline>
        <div
          class="control"
          v-for="(key2, index2) in Object.keys(shadows[key])"
          :key="index2"
        >
          <b-taglist attached>
            <b-tag type="is-light">
              {{baseName}}-{{key2 === 'color' ? type : 'shadow'}}-{{key}}-{{key2}}
            </b-tag>
            <b-tag type="is-info is-light">
              {{shadows[key][key2]}}
            </b-tag>
          </b-taglist>
        </div>
      </b-field>

    </div>

  </div>
</template>

<script>
export default {
  methods: {
    getShadowStyle() {
      return `box-shadow: ${this.shadows['1']['offset-x']} ${this.shadows['1']['offset-y']} ${this.shadows['1'].blur} ${this.shadows['1'].spread} ${this.shadows['1'].color}, ${this.shadows['2']['offset-x']} ${this.shadows['2']['offset-y']} ${this.shadows['2'].blur} ${this.shadows['2'].spread} ${this.shadows['2'].color}`;
    }
  },
  name: 'TokenShadowBlock',
  props: [
    'baseName',
    'shadows',
    'type'
  ]
};
</script>

<style lang="scss" scoped>
.shadow {
  padding: 2rem;
  margin: 2rem;
}
</style>

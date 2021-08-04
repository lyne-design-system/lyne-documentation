<template>
  <Layout>
    <section class="section">
      <div class="container">
        <h1 class="title is-1">Shadow</h1>

        <div
          v-for="(key, index) in Object.keys($data.tokens)"
          :key="index"
        >
          <h2 class="title is-2">Elevation Level {{key}}</h2>

          <h3 class="title is-3">Soft</h3>
          <TokenShadowBlock
            :baseName="$data.tokenPrefix + key"
            type="soft"
            :shadows="{
              '1': {
                blur: $data.tokens[key].shadow['1'].blur,
                spread: $data.tokens[key].shadow['1'].spread,
                'offset-x': $data.tokens[key].shadow['1'].offset.x,
                'offset-y': $data.tokens[key].shadow['1'].offset.y,
                color: $data.tokens[key].soft['1'].color
              },
              '2': {
                blur: $data.tokens[key].shadow['2'].blur,
                spread: $data.tokens[key].shadow['2'].spread,
                'offset-x': $data.tokens[key].shadow['2'].offset.x,
                'offset-y': $data.tokens[key].shadow['2'].offset.y,
                color: $data.tokens[key].soft['2'].color
              }
            }"
          />

          <h3 class="title is-3">Hard</h3>
          <TokenShadowBlock
            :baseName="$data.tokenPrefix + key"
            type="hard"
            :shadows="{
              '1': {
                blur: $data.tokens[key].shadow['1'].blur,
                spread: $data.tokens[key].shadow['1'].spread,
                'offset-x': $data.tokens[key].shadow['1'].offset.x,
                'offset-y': $data.tokens[key].shadow['1'].offset.y,
                color: $data.tokens[key].hard['1'].color
              },
              '2': {
                blur: $data.tokens[key].shadow['2'].blur,
                spread: $data.tokens[key].shadow['2'].spread,
                'offset-x': $data.tokens[key].shadow['2'].offset.x,
                'offset-y': $data.tokens[key].shadow['2'].offset.y,
                color: $data.tokens[key].hard['2'].color
              }
            }"
          />

        </div>

      </div>

    </section>
  </Layout>
</template>

<script>
import * as tokens from 'lyne-design-tokens/dist/js/tokens.nested.json';
import TokenShadowBlock from '../../components/TokenShadowBlock.vue';

export default {
  components: {
    TokenShadowBlock
  },
  data() {
    const shadowTokens = tokens.shadow.elevation.level;

    return {
      tokenPrefix: 'shadow-elevation-level-',
      tokens: shadowTokens
    };
  }
};
</script>

<style lang="scss" scoped>

.token {
  display: block;
  width: 4rem;
  height: 4rem;
  background-color: black;
  box-sizing: border-box;
}

</style>

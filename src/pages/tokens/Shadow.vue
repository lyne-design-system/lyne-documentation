<template>
  <Layout>
    <section class="section">
      <div class="container">
        <sbb-title level="1" text="Shadow" class="page-title"></sbb-title>

        <div v-for="(key, index) in Object.keys($data.tokens)" :key="index">
          <sbb-title level="2" :text="`Elevation Level ${key}`"></sbb-title>

          <sbb-title level="3" text="Soft"></sbb-title>

          <TokenShadowBlock
            :baseName="$data.tokenPrefix + key"
            type="soft"
            :shadows="{
              '1': {
                blur: $data.tokens[key][`${$data.tokenPrefix}${key}-shadow-1-blur`] + 'px',
                spread: $data.tokens[key][`${$data.tokenPrefix}${key}-shadow-1-spread`] + 'px',
                'offset-x':
                  $data.tokens[key][`${$data.tokenPrefix}${key}-shadow-1-offset-x`] + 'px',
                'offset-y':
                  $data.tokens[key][`${$data.tokenPrefix}${key}-shadow-1-offset-y`] + 'px',
                color: $data.tokens[key][`${$data.tokenPrefix}${key}-soft-1-color`],
              },
              '2': {
                blur: $data.tokens[key][`${$data.tokenPrefix}${key}-shadow-2-blur`] + 'px',
                spread: $data.tokens[key][`${$data.tokenPrefix}${key}-shadow-2-spread`] + 'px',
                'offset-x':
                  $data.tokens[key][`${$data.tokenPrefix}${key}-shadow-2-offset-x`] + 'px',
                'offset-y':
                  $data.tokens[key][`${$data.tokenPrefix}${key}-shadow-2-offset-y`] + 'px',
                color: $data.tokens[key][`${$data.tokenPrefix}${key}-soft-2-color`],
              },
            }"
          />

          <sbb-title level="3" text="Hard"></sbb-title>

          <TokenShadowBlock
            :baseName="$data.tokenPrefix + key"
            type="hard"
            :shadows="{
              '1': {
                blur: $data.tokens[key][`${$data.tokenPrefix}${key}-shadow-1-blur`] + 'px',
                spread: $data.tokens[key][`${$data.tokenPrefix}${key}-shadow-1-spread`] + 'px',
                'offset-x':
                  $data.tokens[key][`${$data.tokenPrefix}${key}-shadow-1-offset-x`] + 'px',
                'offset-y':
                  $data.tokens[key][`${$data.tokenPrefix}${key}-shadow-1-offset-y`] + 'px',
                color: $data.tokens[key][`${$data.tokenPrefix}${key}-hard-1-color`],
              },
              '2': {
                blur: $data.tokens[key][`${$data.tokenPrefix}${key}-shadow-2-blur`] + 'px',
                spread: $data.tokens[key][`${$data.tokenPrefix}${key}-shadow-2-spread`] + 'px',
                'offset-x':
                  $data.tokens[key][`${$data.tokenPrefix}${key}-shadow-2-offset-x`] + 'px',
                'offset-y':
                  $data.tokens[key][`${$data.tokenPrefix}${key}-shadow-2-offset-y`] + 'px',
                color: $data.tokens[key][`${$data.tokenPrefix}${key}-hard-2-color`],
              },
            }"
          />
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import { designTokensByPath, groupedTokens } from '../../helpers/designToken';
import TokenShadowBlock from '../../components/TokenShadowBlock.vue';

const { tokens } = require('@sbb-esta/lyne-design-tokens/dist/js/sbb-tokens-raw.json');

const getNamedGroupedTokens = (_tokens) => {
  const keys = Object.keys(_tokens);
  const finalTokens = {};

  keys.forEach((key) => {
    const tokenGroup = _tokens[key];
    const tokensObject = {};

    tokenGroup.forEach((token) => {
      tokensObject[token.name] = token.value;
    });

    finalTokens[key] = tokensObject;
  });

  return finalTokens;
};

const shadowTokens = designTokensByPath(tokens, 'shadow');
const _groupedTokens = groupedTokens(shadowTokens, 'group');
const namedTokenGroups = getNamedGroupedTokens(_groupedTokens);

export default {
  components: {
    TokenShadowBlock,
  },
  data() {
    return {
      tokenPrefix: 'sbb-shadow-elevation-level-',
      tokens: namedTokenGroups,
    };
  },
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

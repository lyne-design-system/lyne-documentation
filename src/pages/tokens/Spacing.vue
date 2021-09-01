<template>
  <Layout>
    <section class="section">
      <div class="container">
        <lyne-title level="1" text="Spacing"></lyne-title>

        <div
          class="content"
          v-for="(category, index) in $data.tokens"
          :key="index"
        >
          <lyne-title level="2" :text="category.title"></lyne-title>
          <TokensTable :tokens="category.values">
            <template v-slot="slotProps">
              <span
                class="token"
                :style="{
                  height: slotProps.token.value,
                  width: slotProps.token.value
                }"
              />
            </template>
          </TokensTable>
        </div>
      </div>

    </section>
  </Layout>
</template>

<script>
import { designTokensByCategory } from '../../helpers/designToken';
import TokensTable from '../../components/TokensTable.vue';

const {
  tokens
} = require('lyne-design-tokens/dist/js/tokens-raw.json');

const spacingTokens = designTokensByCategory(tokens, 'spacing');

spacingTokens.map((_token) => {
  const token = _token;

  token.value = `${token.value}px`;

  return token;
});

const tokensFixed = spacingTokens.filter((token) => token.attributes.type === 'fixed');
const tokensResponsive = spacingTokens.filter((token) => token.attributes.type === 'responsive');
const data = [
  {
    title: 'Fixed',
    values: tokensFixed
  },
  {
    title: 'Responsive',
    values: tokensResponsive
  }
];

export default {
  components: {
    TokensTable
  },
  data() {
    return {
      tokens: data
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

<template>
  <Layout>
    <section class="section">
      <div class="container">
        <h1 class="title is-1">Spacing</h1>

        <div
          class="content"
          v-for="(category, index) in $data.tokens"
          :key="index"
        >
          <h2>{{category.title}}</h2>
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
    values: tokensFixed.reverse()
  },
  {
    title: 'Responsive',
    values: tokensResponsive.reverse()
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

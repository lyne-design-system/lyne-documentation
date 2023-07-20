<template>
  <Layout>
    <section class="section">
      <div class="container">
        <sbb-title level="1" class="page-title">Spacing</sbb-title>

        <div class="content" v-for="(category, index) in $data.tokens" :key="index">
          <sbb-title level="2">{{ category.title }}</sbb-title>
          <TokensTable :tokens="category.values">
            <template v-slot="slotProps">
              <span
                class="token"
                :style="{
                  height: slotProps.token.value,
                  width: slotProps.token.value,
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
import { addUnitToTokenValue, designTokensByPath } from '../../helpers/designToken';
import TokensTable from '../../components/TokensTable.vue';

const { tokens } = require('@sbb-esta/lyne-design-tokens/dist/js/sbb-tokens-raw.json');

const spacingTokens = designTokensByPath(tokens, 'spacing').map((token) =>
  addUnitToTokenValue(token, 'px'),
);

const tokensFixed = spacingTokens.filter((token) => token.attributes.type === 'fixed');
const tokensResponsive = spacingTokens.filter((token) => token.attributes.type === 'responsive');
const data = [
  {
    title: 'Fixed',
    values: tokensFixed,
  },
  {
    title: 'Responsive (grouped by type, by breakpoint)',
    values: tokensResponsive,
  },
];

export default {
  components: {
    TokensTable,
  },
  data() {
    return {
      tokens: data,
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

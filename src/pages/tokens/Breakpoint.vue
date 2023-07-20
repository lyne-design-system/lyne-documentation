<template>
  <Layout>
    <section class="section">
      <div class="container">
        <div class="content">
          <sbb-title level="1" class="page-title">Breakpoint</sbb-title>

          <TokensTable :tokens="$data.tokens" :hideExampleColumn="true" />
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import { addUnitToTokenValue, designTokensByPath } from '../../helpers/designToken';
import TokensTable from '../../components/TokensTable.vue';

const { tokens } = require('@sbb-esta/lyne-design-tokens/dist/js/sbb-tokens-raw.json');

const breakpointTokens = designTokensByPath(tokens, 'breakpoint').map((token) =>
  addUnitToTokenValue(token, 'px'),
);

export default {
  components: {
    TokensTable,
  },
  data() {
    return {
      tokens: breakpointTokens,
    };
  },
};
</script>

<style lang="scss" scoped>
.token {
  display: block;
  width: 4rem;
  height: 4rem;
  border: 1px solid black;
}
</style>

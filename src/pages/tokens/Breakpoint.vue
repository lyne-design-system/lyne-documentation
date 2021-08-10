<template>
  <Layout>
    <section class="section">
      <div class="container">
        <div class="content">
          <h1 class="title is-1">Breakpoint</h1>

          <TokensTable
            :tokens="$data.tokens"
            :hideExampleColumn="true"
          />

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

const breakpointTokens = designTokensByCategory(tokens, 'breakpoint');

breakpointTokens.map((_token) => {
  const token = _token;

  token.value = `${token.value}px`;

  return token;
});

export default {
  components: {
    TokensTable
  },
  data() {
    return {
      tokens: breakpointTokens.reverse()
    };
  }
};
</script>

<style lang="scss" scoped>

.token {
  display: block;
  width: 4rem;
  height: 4rem;
  border: 1px solid black
}

</style>

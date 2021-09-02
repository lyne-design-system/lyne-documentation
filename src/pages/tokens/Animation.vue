<template>
  <Layout>
    <section class="section">
      <div class="container">
        <div class="content">
          <lyne-title level="1" text="Animation" class="page-title"></lyne-title>

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

const animationTokens = designTokensByCategory(tokens, 'animation');

export default {
  components: {
    TokensTable
  },
  data() {
    return {
      tokens: animationTokens
    };
  }
};
</script>

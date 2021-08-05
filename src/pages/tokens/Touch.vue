<template>
  <Layout>
    <section class="section">
      <div class="container">
        <h1 class="title is-1">Touch</h1>

        <TokensTable :tokens="tokens">
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
    </section>
  </Layout>
</template>

<script>
import { designTokensByCategory } from '../../helpers/designToken';
import TokensTable from '../../components/TokensTable.vue';

const {
  tokens
} = require('lyne-design-tokens/dist/js/tokens-raw.json');

export default {
  components: {
    TokensTable
  },
  data() {
    const touchTokens = designTokensByCategory(tokens, 'touch');

    return {
      tokens: touchTokens
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

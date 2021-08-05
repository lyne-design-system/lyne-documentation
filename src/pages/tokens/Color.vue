<template>
  <Layout>
    <section class="section">
      <div class="container">
        <div class="content">
          <h1 class="title is-1">Color</h1>

          <TokensTable :tokens="$data.tokens">
            <template v-slot="slotProps">
              <span
                class="token"
                :style="{
                  backgroundColor: slotProps.token.value
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
import sortByKey from '../../helpers/sort';
import TokensTable from '../../components/TokensTable.vue';

const {
  tokens
} = require('lyne-design-tokens/dist/js/tokens-raw.json');

export default {
  components: {
    TokensTable
  },
  data() {
    const colorTokens = designTokensByCategory(tokens, 'color');
    const sortedColorTokens = sortByKey(colorTokens, 'name');

    return {
      tokens: sortedColorTokens
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

<template>
  <Layout>
    <section class="section">
      <div class="container">
        <div class="content">
          <lyne-title level="1" text="Color" class="page-title"></lyne-title>

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
} = require('@sbb-esta/lyne-design-tokens/dist/js/tokens-raw.json');

const colorTokens = designTokensByCategory(tokens, 'color');
const sortedColorTokens = sortByKey(colorTokens, 'name');

export default {
  components: {
    TokensTable
  },
  data() {
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

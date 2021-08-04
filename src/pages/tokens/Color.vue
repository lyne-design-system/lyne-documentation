<template>
  <Layout>
    <section class="section">
      <div class="container">
        <div class="content">
          <h1 class="title is-1">Color</h1>

          <TokensTable :tokens="$data.tokens">
            <template v-slot="slotProps">
              <span
                class="list-item-sample var-color"
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
import * as tokens from 'lyne-design-tokens/dist/js/tokens.umd';
import findTokens from '../../helpers/designToken';
import sortByKey from '../../helpers/sort';
import TokensTable from '../../components/TokensTable.vue';

export default {
  components: {
    TokensTable
  },
  data() {
    const colorTokens = findTokens(tokens.color);
    const sortedColorTokens = sortByKey(colorTokens, 'fullName');

    return {
      tokens: sortedColorTokens
    };
  }
};
</script>

<style lang="scss" scoped>

table td.textCell {
  line-height: 100%;
  vertical-align: middle;
}

.list-item-sample.var-color {
  display: block;
  width: 4rem;
  height: 4rem;
  border: 1px solid black
}

</style>

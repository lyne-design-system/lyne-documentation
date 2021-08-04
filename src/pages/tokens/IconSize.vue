<template>
  <Layout>
    <section class="section">
      <div class="container">
        <h1 class="title is-1">Icon Size</h1>

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
import * as tokens from 'lyne-design-tokens/dist/js/tokens.umd';
import findTokens from '../../helpers/designToken';
import TokensTable from '../../components/TokensTable.vue';

export default {
  components: {
    TokensTable
  },
  data() {
    const sizeTokens = findTokens(tokens.iconSize);

    return {
      tokens: sizeTokens.reverse()
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

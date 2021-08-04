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
import * as tokens from 'lyne-design-tokens/dist/js/tokens.umd';
import findTokens from '../../helpers/designToken';
import TokensTable from '../../components/TokensTable.vue';

export default {
  components: {
    TokensTable
  },
  data() {
    const breakpointTokens = findTokens(tokens.breakpoint);

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

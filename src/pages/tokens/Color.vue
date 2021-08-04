<template>
  <Layout>
    <section class="section">
      <div class="container">
        <div class="content">
          <h1 class="title is-1">Color</h1>

          <table class="table is-fullwidth">
            <thead>
              <tr>
                <th>Name</th>
                <th>Value</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(token) in $data.tokens"
                :key="token.key"
              >
                <td class="textCell">{{token.fullName}}</td>
                <td class="textCell">{{token.value}}</td>
                <td>
                  <span
                    class="list-item-sample var-color"
                    :style="{ backgroundColor: token.value}"
                  />
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </section>

  </Layout>
</template>

<script>
import * as tokens from 'lyne-design-tokens/dist/js/tokens.umd';
import findTokens from '../../helpers/designToken';
import sortByKey from '../../helpers/sort';

export default {
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

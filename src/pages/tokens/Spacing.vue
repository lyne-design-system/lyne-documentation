<template>
  <Layout>
    <section class="section">
      <div class="container">
        <div class="content">
          <h1 class="title is-1">Spacing</h1>

          <div
            v-for="(category, index) in $data.tokens"
            :key="index"
          >
            <h2>{{category.title}}</h2>

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
                v-for="(token) in category.values"
                :key="token.key"
              >
                <td class="textCell">{{token.fullName}}</td>
                <td class="textCell">{{token.value}}</td>
                <td>
                  <span
                    class="list-item-sample"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import * as tokens from 'lyne-design-tokens/dist/js/tokens.umd';
import findTokens from '../../helpers/designToken';

export default {
  data() {
    const spacingTokens = findTokens(tokens.spacing);
    const tokensFixed = spacingTokens.filter((token) => token.attributes.type === 'fixed');
    const tokensResponsive = spacingTokens.filter((token) => token.attributes.type === 'responsive');
    const data = [
      {
        title: 'Fixed',
        values: tokensFixed.reverse()
      },
      {
        title: 'Responsive',
        values: tokensResponsive.reverse()
      }
    ];

    return {
      tokens: data
    };
  }
}
</script>

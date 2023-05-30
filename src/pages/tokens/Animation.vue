<template>
  <Layout>
    <section class="section">
      <div class="container">
        <div class="content">
          <sbb-title level="1" class="page-title">Animation</sbb-title>

          <TokensTable :tokens="$data.tokens" :hideExampleColumn="true" />
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import { addUnitToTokenValue, designTokensByCategory } from '../../helpers/designToken';
import TokensTable from '../../components/TokensTable.vue';

const { tokens } = require('@sbb-esta/lyne-design-tokens/dist/js/sbb-tokens-raw.json');

const easingAnimationTokens = designTokensByCategory(tokens, 'animation');
const durationAnimationTokens = designTokensByCategory(tokens, 'time').map((animation) =>
  addUnitToTokenValue(animation, 'ms')
);

export default {
  components: {
    TokensTable,
  },
  data() {
    return {
      tokens: [...durationAnimationTokens, ...easingAnimationTokens],
    };
  },
};
</script>

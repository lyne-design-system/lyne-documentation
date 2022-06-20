<template>
  <Layout>
    <section class="section">
      <div class="container">
        <div class="content">
          <lyne-title level="1" text="Border" class="page-title"></lyne-title>

          <div
            v-for="(group, index) in $data.tokensGroups"
            :key="index"
          >
            <lyne-title level="2" :text="group.name"></lyne-title>

            <TokensTable
              :tokens="group.tokens"
            >
              <template v-slot="slotProps">
                <span
                  v-if="group.key === 'width'"
                  class="border-token-width"
                  :style="{borderWidth: slotProps.token.value}"
                />
                <span
                  v-if="group.key === 'radius'"
                  class="border-token-radius"
                  :style="{borderRadius: slotProps.token.value}"
                />
              </template>
            </TokensTable>
          </div>

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
} = require('@sbb-esta/lyne-design-tokens/dist/js/tokens-raw.json');

const borderTokens = designTokensByCategory(tokens, 'border');

borderTokens.map((_token) => {
  const token = _token;

  token.value = `${token.value}px`;

  return token;
});

const widthTokens = borderTokens.filter((token) => token.attributes.type === 'width');
const radiusTokens = borderTokens.filter((token) => token.attributes.type === 'radius');

export default {
  components: {
    TokensTable
  },
  data() {
    return {
      tokensGroups: [
        {
          key: 'width',
          name: 'border-width',
          tokens: widthTokens
        },
        {
          key: 'radius',
          name: 'border-radius',
          tokens: radiusTokens
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>

.border-token-width {
  display: block;
  width: 4rem;
  height: 4rem;
  border-color: black;
  border-style: solid;
}

.border-token-radius {
  display: block;
  width: 4rem;
  height: 4rem;
  border: 1px solid black;
}

</style>

<template>
  <Layout>
    <section class="section">
      <div class="container">
        <h1 class="title is-1">Icon Size</h1>

        <TokensTable :tokens="tokens">
          <template v-slot="slotProps">
            <span
              class="icon-size-token"
              v-html='getSampleIconForToken(slotProps.token)'
              :style="{height: slotProps.token.value}"
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
const lyneIcons = require('lyne-icons/dist/icons.json').icons;

export default {
  components: {
    TokensTable
  },
  data() {
    const sizeTokens = designTokensByCategory(tokens, 'iconSize');

    return {
      iconUiSmall: lyneIcons['arrow-change-horizontal-small'],
      tokens: sizeTokens.reverse()
    };
  },
  methods: {
    getSampleIconForToken(token) {
      if (token.attributes.type === 'ui') {
        return lyneIcons[`armchair-profile-user-${token.attributes.item}`];
      }

      if (token.attributes.type === 'timetable') {
        if (token.attributes.item === 'attribute') {
          return lyneIcons['sa-sk'];
        }

        if (token.attributes.item === 'him-cus') {
          return lyneIcons['cancellation'];
        }

        return lyneIcons['ic-11'];
      }

      if (token.attributes.type === 'pictograms') {
        return lyneIcons['accessibility-barrierefrei-left'];
      }

      return '';
    }
  }
};
</script>

<style lang="scss">

.icon-size-token {
  display: block;
  width: auto;
  display: flex;
  justify-content: center;
}

.icon-size-token svg {
  display: block;
  height: 100%;
}

</style>

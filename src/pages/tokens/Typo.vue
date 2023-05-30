<template>
  <Layout>
    <section class="section">
      <div class="container">
        <div class="content">
          <sbb-title level="1" class="page-title">Typography</sbb-title>

          <div v-for="(group, index) in $data.tokensGroups" :key="index">
            <sbb-title level="2">{{ group.name }}</sbb-title>

            <TokensTable :tokens="group.tokens" :hideExampleColumn="group.hideExample">
              <template v-slot="slotProps">
                <span v-if="group.key === 'typeFace'" :style="{ fontFamily: slotProps.token.value }"
                  >Type Face Example</span
                >
                <span
                  v-if="group.key === 'letterSpacing'"
                  :style="{ letterSpacing: slotProps.token.value }"
                  >Letter Spacing Example</span
                >
                <span
                  v-if="group.key === 'lineHeight'"
                  :style="{ lineHeight: slotProps.token.value }"
                  >Magna pars studiorum, prodita quaerimus. Idque Caesaris facere voluntate liceret:
                  sese habere. Nihilne te nocturnum praesidium Palati, nihil urbis vigiliae. Vivamus
                  sagittis lacus vel augue laoreet rutrum faucibus.</span
                >
                <span v-if="group.key === 'scale'" :style="{ fontSize: slotProps.token.value }"
                  >Scale Example
                </span>
              </template>
            </TokensTable>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import {
  addUnitToTokenValue,
  designTokensByCategory,
  designTokensByType,
} from '../../helpers/designToken';
import TokensTable from '../../components/TokensTable.vue';

const { tokens } = require('@sbb-esta/lyne-design-tokens/dist/js/sbb-tokens-raw.json');

const typoTokens = designTokensByCategory(tokens, 'typo');
const scaleTokens = designTokensByType(tokens, 'scale').map((scale) =>
  addUnitToTokenValue(scale, 'px')
);
const typeFaceTokens = typoTokens.filter((token) => token.attributes.type === 'typeFace');
const letterSpacingTokens = typoTokens.filter((token) => token.attributes.type === 'letterSpacing');
const lineHeightTokens = typoTokens.filter((token) => token.attributes.type === 'lineHeight');
const remainingTokens = typoTokens.filter(
  (token) => token.attributes.type === 'fontFamilyFallback'
);

export default {
  components: {
    TokensTable,
  },
  data() {
    return {
      tokensGroups: [
        {
          hideExample: true,
          key: 'remainingTokens',
          name: 'General',
          tokens: remainingTokens,
        },
        {
          key: 'typeFace',
          name: 'Type Face',
          tokens: typeFaceTokens,
        },
        {
          key: 'letterSpacing',
          name: 'Letter Spacing',
          tokens: letterSpacingTokens,
        },
        {
          key: 'lineHeight',
          name: 'Line Height',
          tokens: lineHeightTokens,
        },
        {
          key: 'scale',
          name: 'Scale',
          tokens: scaleTokens,
        },
      ],
    };
  },
};
</script>

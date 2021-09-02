<template>
  <Layout>
    <section class="section">
      <div class="container">
        <div class="content">
          <lyne-title level="1" text="Typography" class="page-title"></lyne-title>

          <div
            v-for="(group, index) in $data.tokensGroups"
            :key="index"
          >
            <lyne-title level="2" :text="group.name"></lyne-title>

            <TokensTable
              :tokens="group.tokens"
              :hideExampleColumn="group.hideExample"
            >
              <template v-slot="slotProps">
                <span
                  v-if="group.key === 'typeFace'"
                  :style="{fontFamily: slotProps.token.value}"
                >Type Face Example</span>
                <span
                  v-if="group.key === 'letterSpacing'"
                  :style="{letterSpacing: slotProps.token.value}"
                >Letter Spacing Example</span>
                <span
                  v-if="group.key === 'lineHeight'"
                  :style="{lineHeight: slotProps.token.value}"
                >Magna pars studiorum, prodita quaerimus.
                Idque Caesaris facere voluntate liceret:
                sese habere. Nihilne te nocturnum praesidium Palati,
                nihil urbis vigiliae. Vivamus sagittis lacus
                vel augue laoreet rutrum faucibus.</span>
                <span
                  v-if="group.key === 'scale'"
                  :style="{fontSize: `${slotProps.token.value}px`}"
                >Scale Example</span>
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
} = require('lyne-design-tokens/dist/js/tokens-raw.json');

const typoTokens = designTokensByCategory(tokens, 'typo');
const typeFaceTokens = typoTokens.filter((token) => token.attributes.type === 'typeFace');
const letterSpacingTokens = typoTokens.filter((token) => token.attributes.type === 'letterSpacing');
const lineHeightTokens = typoTokens.filter((token) => token.attributes.type === 'lineHeight');
const scaleTokens = typoTokens.filter((token) => token.attributes.type === 'scale');
const remainingTokens = typoTokens.filter((token) => token.attributes.type === 'fontFamilyFallback');

export default {
  components: {
    TokensTable
  },
  data() {
    return {
      tokensGroups: [
        {
          hideExample: true,
          key: 'remainingTokens',
          name: 'General',
          tokens: remainingTokens
        },
        {
          key: 'typeFace',
          name: 'Type Face',
          tokens: typeFaceTokens
        },
        {
          key: 'letterSpacing',
          name: 'Letter Spacing',
          tokens: letterSpacingTokens
        },
        {
          key: 'lineHeight',
          name: 'Line Height',
          tokens: lineHeightTokens
        },
        {
          key: 'scale',
          name: 'Scale',
          tokens: scaleTokens
        }
      ]
    };
  }
};
</script>

<!--
fontFamilyFallback: {
    value: '\'Helvetica Neue\', Helvetica, Arial, sans-serif'
  },
  typeFace: {
    sbbLight: {
      value: '\'SBBWeb Light\', {typo.fontFamilyFallback.value}'
    },
    sbbRoman: {
      value: '\'SBBWeb Roman\', {typo.fontFamilyFallback.value}'
    },
    sbbBold: {
      value: '\'SBBWeb Bold\', {typo.fontFamilyFallback.value}'
    },
    i18n: {
      traditionalChinese: {
        value: '\'Example for possible i18n structure\''
      }
    }
  },
  letterSpacing: {
    titles: {
      value: '0'
    },
    bodyText: {
      value: '0.03em'
    }
  },
  lineHeight: {
    titles: {
      value: '1.3'
    },
    bodyText: {
      value: '1.7'
    }
  },
  scale: {
    '0-75x': {
      value: typoSpacing(0.75)
    },
    '0-8125x': {
      value: typoSpacing(0.8125)
    },
    '0-875x': {
      value: typoSpacing(0.875)
    },
    'default': {
      value: typoSpacing(1)
    },
    '1-125x': {
      value: typoSpacing(1.125)
    },
    '1-25x': {
      value: typoSpacing(1.25)
    },
    '1-5x': {
      value: typoSpacing(1.5)
    },
    '2x': {
      value: typoSpacing(2)
    },
    '2-5x': {
      value: typoSpacing(2.5)
    },
    '3x': {
      value: typoSpacing(3)
    },
    '3-5x': {
      value: typoSpacing(3.5)
    },
    '4x': {
      value: typoSpacing(4)
    }
  }
};

-->

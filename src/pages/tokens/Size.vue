<template>
  <Layout>
    <section class="section">
      <div class="container">
        <div class="content">
          <lyne-title level="1" text="Size" class="page-title"></lyne-title>

          <div
            v-for="(key, index) in Object.keys($data.tokens)"
            :key="index"
          >
            <lyne-title level="2" :text="key"></lyne-title>

            <TokensTable :tokens="$data.tokens[key]">
              <template v-slot="slotProps">
                <span
                  v-if="key === 'icon'"
                  class="icon-size-token"
                  v-html='getSampleIconForToken(slotProps.token)'
                  :style="{height: slotProps.token.value}"
                />

                <span
                  v-if="key !== 'icon'"
                  class="default-size-token"
                  :style="{
                    height: slotProps.token.value,
                    width: slotProps.token.value
                  }"
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
import {
  designTokensByCategory,
  groupedTokens
} from '../../helpers/designToken';
import TokensTable from '../../components/TokensTable.vue';

const {
  tokens
} = require('@sbb-esta/lyne-design-tokens/dist/js/tokens-raw.json');
const lyneIcons = require('lyne-icons/dist/icons.json').icons;

const sizeTokens = designTokensByCategory(tokens, 'size');

sizeTokens.map((_token) => {
  const token = _token;

  token.value = `${token.value}px`;

  return token;
});

const tokensByGroups = groupedTokens(sizeTokens, 'group');

export default {
  components: {
    TokensTable
  },
  data() {
    return {
      tokens: tokensByGroups
    };
  },
  methods: {
    getSampleIconForToken(token) {
      if (token.attributes.item === 'ui') {
        return lyneIcons[`armchair-profile-user-${token.attributes.subitem}`];
      }

      if (token.attributes.item === 'timetable') {
        if (token.attributes.subitem === 'attribute') {
          return lyneIcons['sa-sk'];
        }

        if (token.attributes.subitem === 'him-cus') {
          return lyneIcons['cancellation'];
        }

        return lyneIcons['ic-11'];
      }

      if (token.attributes.item === 'pictograms') {
        return lyneIcons['accessibility-barrierefrei-left'];
      }

      return '';
    }
  }
};
</script>

<style lang="scss" scoped>

.default-size-token {
  display: block;
  background-color: black;
}

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

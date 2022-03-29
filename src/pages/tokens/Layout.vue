<template>
  <Layout>
    <section class="section">
      <div class="container">
        <lyne-title level="1" text="Layout" class="page-title"></lyne-title>

        <div
          class="content"
          v-for="(category, index) in $data.tokens"
          :key="index"
        >
          <lyne-title level="2" :text="category.title"></lyne-title>
          <TokensTable :tokens="category.values">
            <template v-slot="slotProps">
              <span
                class="token--grid"
                :style="{
                  'grid-template-columns': 'repeat('+slotProps.token.value+', 1fr)',
                }"
              >
                <span
                  v-for="index in slotProps.token.value"
                  :key="index"
                  class="token--grid__item"
                />
              </span>
            </template>
          </TokensTable>
        </div>
        <div
          class="content"
          v-for="(category, index) in $data.tokensPx"
          :key="index"
        >
          <lyne-title level="2" :text="category.title"></lyne-title>
          <TokensTable :tokens="category.values">
            <template v-slot="slotProps">
              <span
                class="token--px"
                :style="{
                  height: slotProps.token.value,
                  width: slotProps.token.value
                }"
              />
            </template>
          </TokensTable>
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

const layoutTokens = designTokensByCategory(tokens, 'layout');

const baseGridColumns = layoutTokens.filter((token) => token.attributes.group === 'base-grid-columns');

const baseGridGutterResponsive = layoutTokens.filter((token) => token.attributes.group === 'base-grid-gutter-responsive');

baseGridGutterResponsive.map((_token) => {
  const token = _token;

  token.value = `${token.value}px`;

  return token;
});

const baseOffsetResponsive = layoutTokens.filter((token) => token.attributes.group === 'base-offset-responsive');

baseOffsetResponsive.map((_token) => {
  const token = _token;

  token.value = `${token.value}px`;

  return token;
});

const data = [
  {
    title: 'Base Grid Columns (by breakpoint)',
    values: baseGridColumns
  }
];

const dataPxValues = [
  {
    title: 'Base Grid Gutter — Responsive (by breakpoint)',
    values: baseGridGutterResponsive
  },
  {
    title: 'Base Offset — Responsive (by breakpoint)',
    values: baseOffsetResponsive
  }
];

export default {
  components: {
    TokensTable
  },
  data() {
    return {
      tokens: data,
      tokensPx: dataPxValues
    };
  }
};
</script>

<style lang="scss" scoped>

.token--px {
  display: block;
  background-color: black;
  box-sizing: border-box;
}

.token--grid {
  display: grid;
  grid-column-gap: 0.25rem;
  width: 100%;

  &__item {
    background-color: black;
    box-sizing: border-box;
    height: 1rem;
  }
}

</style>

<template>
  <Layout>
    <section class="section">
      <div class="container">
        <sbb-title level="1" text="Layout" class="page-title"></sbb-title>

        <div class="content" v-for="(category, index) in $data.tokens" :key="'tokens' + index">
          <sbb-title level="2" :text="category.title"></sbb-title>
          <TokensTable :tokens="category.values">
            <template v-slot="slotProps">
              <span
                class="token--grid"
                :style="{
                  'grid-template-columns': 'repeat(' + slotProps.token.value + ', 1fr)',
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
        <div class="content" v-for="(category, index) in $data.tokensPx" :key="'tokensPx' + index">
          <sbb-title level="2" :text="category.title"></sbb-title>
          <TokensTable :tokens="category.values">
            <template v-slot="slotProps">
              <span
                class="token--px"
                :style="{
                  height: slotProps.token.value,
                  width: slotProps.token.value,
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
import { addUnitToTokenValue, designTokensByPath } from '../../helpers/designToken';
import TokensTable from '../../components/TokensTable.vue';

const { tokens } = require('@sbb-esta/lyne-design-tokens/dist/js/sbb-tokens-raw.json');

const layoutTokens = designTokensByPath(tokens, 'layout');

const baseGridColumns = layoutTokens.filter(
  (token) => token.attributes.group === 'base-grid-columns'
);

const baseGridGutterResponsive = layoutTokens
  .filter((token) => token.attributes.group === 'base-grid-gutter-responsive')
  .map((layout) => addUnitToTokenValue(layout, 'px'));

const baseOffsetResponsive = layoutTokens
  .filter((token) => token.attributes.group === 'base-offset-responsive')
  .map((layout) => addUnitToTokenValue(layout, 'px'));

const data = [
  {
    title: 'Base Grid Columns (by breakpoint)',
    values: baseGridColumns,
  },
];

const dataPxValues = [
  {
    title: 'Base Grid Gutter — Responsive (by breakpoint)',
    values: baseGridGutterResponsive,
  },
  {
    title: 'Base Offset — Responsive (by breakpoint)',
    values: baseOffsetResponsive,
  },
];

export default {
  components: {
    TokensTable,
  },
  data() {
    return {
      tokens: data,
      tokensPx: dataPxValues,
    };
  },
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

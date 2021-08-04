<template>
  <Layout>

    <section class="section">
      <div class="container">
        <div class="content">
          <h1 class="title is-1">Color</h1>

          <table class="table is-fullwidth">
            <thead>
              <tr>
                <th>Example</th>
                <th>Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(token) in $data.tokens.color"
                :key="token.key"
              >
                <td>
                  <span
                    class="list-item-sample var-color"
                    :style="{ backgroundColor: token.value}"
                  />
                </td>
                <td class="textCell">{{token.key}}</td>
                <td class="textCell">{{token.value}}</td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </section>

  </Layout>
</template>

<script>
const designTokens = require('lyne-design-tokens/dist/js/tokens.umd');
const sortHelper = require('../../helpers/sort');

const generateTokens = (json, _finalJson) => {

  const keys = Object.keys(json);
  const finalJson = _finalJson || [];

  while (keys.length > 0) {
    const key = keys.pop();
    const value = json[key];
    const hasPathKey = Object.keys(value)
      .includes('path');

    if (hasPathKey) {
      const newKey = value.path.join('-');
      const newValue = value.value;

      finalJson.push({
        key: newKey,
        value: newValue
      });

    } else {
      generateTokens(value, finalJson);
    }
  }

  return finalJson;

};

export default {

  data() {
    const colorTokens = generateTokens(designTokens.color);
    const sortedColorTokens = sortHelper(colorTokens, 'key');

    return {
      tokens: {
        color: sortedColorTokens
      }
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

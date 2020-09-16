<template>
  <Layout>

    <section class="section">
      <div class="container">
        <h1 class="title is-1">Design Tokens</h1>

        <div class="content">
          <h2 class="title is-2">Color</h2>

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
                <td>{{token.key}}</td>
                <td>{{token.value}}</td>
              </tr>
            </tbody>
          </table>

          <h2 class="title is-2">Font Size</h2>

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
                v-for="(token) in $data.tokens.fontSize"
                :key="token.key"
              >
                <td>
                  <span :style="{ fontSize: token.value}">Sample text</span>
                </td>
                <td>{{token.key}}</td>
                <td>{{token.value}}</td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </section>

  </Layout>
</template>

<script>
const designTokens = require('lyne-design-tokens/dist/js/tokens.umd.js');

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
    return {
      tokens: {
        color: generateTokens(designTokens.color),
        fontSize: generateTokens(designTokens.size.font)
      }
    };
  }
};
</script>

<style lang="scss" scoped>

.list-item-sample.var-color {
  display: block;
  width: 4rem;
  height: 4rem;
}

</style>

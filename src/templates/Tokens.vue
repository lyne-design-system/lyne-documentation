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

const cleanPixelValues = (tokens, sourceKey, targetKey) => {
  tokens.map((token) => {
    const _token = token;
    const split = _token[sourceKey].split('px');

    if (split.length === 2) {
      _token[targetKey] = parseInt(split[0], 10);
    }

    return _token;

  });

  return tokens;
};

const sortTokens = (tokens, sortKey) => {
  tokens.sort((a, b) => {
    const valueA = a[sortKey];
    const valueB = b[sortKey];
    let comparison = 0;

    if (valueA > valueB) {
      comparison = 1;
    } else if (valueA < valueB) {
      comparison = -1;
    }

    return comparison;
  });

  return tokens;
};

export default {

  data() {
    const colorTokens = generateTokens(designTokens.color);
    const fontTokens = generateTokens(designTokens.size.font);
    const cleanFontTokenPixelValues = cleanPixelValues(fontTokens, 'value', 'valueInt');
    const sortedColorTokens = sortTokens(colorTokens, 'key');
    const sortedFontTokens = sortTokens(cleanFontTokenPixelValues, 'valueInt');

    return {
      tokens: {
        color: sortedColorTokens,
        fontSize: sortedFontTokens
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
  border: 1px solid black
}

</style>

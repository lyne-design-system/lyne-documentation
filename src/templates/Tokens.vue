<template>
  <Layout>
    <p>tokens</p>
  </Layout>
</template>

<page-query>
</page-query>

<script>
const designTokens = require('lyne-design-tokens/dist/js/tokens.umd.js');

const generateTokens = (json, _finalJson) => {

  const keys = Object.keys(json);
  const finalJson = _finalJson || {};

  while (keys.length > 0) {
    const key = keys.pop();
    const value = json[key];
    const hasPathKey = Object.keys(value)
      .includes('path');

    if (hasPathKey) {
      const newKey = value.path.join('-');
      const newValue = value.value;

      finalJson[newKey] = newValue;
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
</style>

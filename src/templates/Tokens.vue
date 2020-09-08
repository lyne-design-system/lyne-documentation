<template>
  <Layout>

    <h1>Color</h1>
    <ul class="list">
      <li
        v-for="(token) in $data.tokens.color"
        :key="token.key"
        class="list-item"
      >
        <span
          class="list-item-sample var-color"
          :style="{ backgroundColor: token.value}"
          ></span>
        <span>{{token.key}}: {{token.value}}</span>
      </li>
    </ul>

    <h1>Font Size</h1>
    <ul class="list">
      <li
        v-for="(token) in $data.tokens.fontSize"
        :key="token.key"
        class="list-item"
      >
        <span
          class="list-item-sample"
          :style="{ fontSize: token.value}"
        >Sample text</span>
        <span>{{token.key}}: {{token.value}}</span>
      </li>
    </ul>

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
.list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.list-item {
  margin-bottom: 20px;
}

.list-item-sample {
  display: block;
  border: 1px solid black;
  padding: 10px;
}

.list-item-sample.var-color {
  width: 20px;
  height: 20px;
}

</style>

<template>
  <Layout>

    <h1>Icons</h1>

    <ul class='list'>
      <li
        v-for='(icon) in $data.icons'
        :key='icon.id'
        class='list-item'
      >
          <span class='name'>{{icon.name}}</span>
          <span v-html='icon.svg'></span>
      </li>
    </ul>

  </Layout>
</template>

<script>
const lyneIcons = require('lyne-icons/dist/icons.json');

export default {
  data() {
    return {
      icons: lyneIcons
    };
  }
};
</script>

<style lang="scss" scoped>
  .list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
  }

  .list-item {
    display: flex;
    flex: 0 0 140px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: 140px;
    border: 1px solid black;
    margin: 1rem;
    border-radius: .5rem;
  }

  .name {
    flex: 0 0 100%;
    text-align: center;
  }
</style>

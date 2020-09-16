<template>
  <Layout>
    <section class="section">
      <div class="container">
        <h1 class="title is-1">Icons</h1>

        <div class="content">
          <table class="table is-fullwidth">
            <thead>
              <tr>
                <th>Icon</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for='(icon) in $data.icons'
                :key='icon.id'
              >
                <td>
                  <span v-html='icon.svg'></span>
                </td>
                <td>{{icon.name}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
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

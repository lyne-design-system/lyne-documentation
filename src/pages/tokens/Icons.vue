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
                  <span
                    v-html='icon.svg'
                    class='iconToken'
                  ></span>
                </td>
                <td class="textCell">{{icon.name}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
const lyneIcons = require('lyne-icons/dist/icons.json').icons;
const sortHelper = require('../../helpers/sort');

export default {
  data() {
    return {
      icons: sortHelper(lyneIcons, 'name')
    };
  }
};
</script>

<style lang="scss">
  table td.textCell {
    line-height: 100%;
    vertical-align: middle;
  }

  .iconToken {
    display: block;
    width: 3rem;
    height: 3rem;
  }

  .iconToken svg {
    width: 100%;
    height: 100%;
  }

</style>

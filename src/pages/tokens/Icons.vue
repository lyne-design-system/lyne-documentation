<template>
  <Layout>
    <section class="section">
      <div class="container">
        <h1 class="title is-1">Icons</h1>

        <div class="block">
            <b-radio v-model="size"
                @change.native="handleRadioChange('small')"
                name="size"
                native-value="small">
                Small
            </b-radio>
            <b-radio v-model="size"
                @change.native="handleRadioChange('medium')"
                name="size"
                native-value="medium">
                Medium
            </b-radio>
            <b-radio v-model="size"
                @change.native="handleRadioChange('large')"
                name="size"
                native-value="large">
                Large
            </b-radio>
        </div>

        <div class="content">
          <table class="table is-fullwidth">
            <thead>
              <tr>
                <th>Icon</th>
                <th>fullName</th>
                <th>description</th>
                <th>id</th>
                <th>name</th>
                <th>variant</th>
                <th>type</th>
                <th>category</th>
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
                    :class="$data.size"
                  ></span>
                </td>
                <td class="textCell">{{icon.fullName}}</td>
                <td>{{icon.description}}</td>
                <td>{{icon.id}}</td>
                <td>{{icon.name}}</td>
                <td>{{icon.variant}}</td>
                <td>{{icon.type}}</td>
                <td>{{icon.category}}</td>

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

const defaultVariant = 'small';
const filterIconsBySizeVariant = (size) => lyneIcons.filter((icon) => icon.variant === size);

const getIcons = (size) => {
  const iconsForVariant = filterIconsBySizeVariant(size);
  const sortedIcons = sortHelper(iconsForVariant, 'name');

  return sortedIcons;
};

const icons = getIcons(defaultVariant);

export default {
  data() {
    return {
      icons,
      size: defaultVariant
    };
  },
  methods: {
    handleRadioChange(size) {
      this.$data.icons = getIcons(size);
    }
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
  }

  .iconToken.small {
    width: 24px;
    height: 24px;
  }

  .iconToken.medium {
    width: 36px;
    height: 36px;
  }

  .iconToken.large {
    width: 48px;
    height: 48px;
  }

  .iconToken svg {
    width: 100%;
    height: 100%;
  }

</style>

<template>
  <Layout>
    <section class="section">
      <div class="container">
        <h1 class="title is-1">Icons</h1>

        <!-- Color switch -->
        <div class="block">
          <p>Color:</p>

          <b-radio
            v-for="(colorVariant, index) in $data.colorOptions"
            :key="index"
            v-model="color"
            name="color"
            :native-value="colorVariant.value"
          >
            {{colorVariant.name}}
          </b-radio>
        </div>

        <!-- Filter size -->
        <div class="block">
            <p>Size variant:</p>

            <b-radio
              v-for="(variantSize, index) in $data.filterOptions.size"
              :key="index"
              v-model="filterValues.size"
              @change.native="handleFilterChange(variantSize.value)"
              name="size"
              :native-value="variantSize.value"
            >
              {{variantSize.name}}
            </b-radio>
        </div>

        <!-- Filter type -->
        <div class="block">
          <p>Icon Type:</p>

          <b-select
            v-model="filterValues.type"
            @change.native="handleFilterChange"
            placeholder="Choose a type"
          >
            <option
              v-for="(typeVariant, index) in $data.filterOptions.type"
              :value="typeVariant"
              :key="index"
            >
              {{ typeVariant }}
            </option>

          </b-select>
        </div>

        <!-- Filter category -->
        <div class="block">
          <p>Icon Category:</p>

          <b-select
            v-model="filterValues.category"
            @change.native="handleFilterChange"
            placeholder="Choose a category"
          >
            <option
              v-for="(categoryVariant, index) in $data.filterOptions.category"
              :value="categoryVariant"
              :key="index"
            >
              {{ categoryVariant }}
            </option>

          </b-select>
        </div>

        <div class="content">
          <p v-if="$data.icons.length === 0">No icons to display</p>
          <table class="table is-fullwidth" v-if="$data.icons.length > 0">
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
                    :class="[$data.size ? $data.size : null, $data.color ? $data.color : null]"
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

/**
 * Filter icons
 */
const filterIconsBySizeVariant = (size, icons) => {
  if (!size) {
    return icons;
  }

  return icons.filter((icon) => icon.variant === size);
};

const filterIconsByCategory = (category, icons) => {
  if (category === 'All') {
    return icons;
  }

  return icons.filter((icon) => icon.category === category);
};

const filterIconsByType = (type, icons) => {
  if (type === 'All') {
    return icons;
  }

  return icons.filter((icon) => icon.type === type);
};

const filterIcons = (filterValues, icons) => {
  const _size = filterIconsBySizeVariant(filterValues.size, icons);
  const _type = filterIconsByType(filterValues.type, _size);
  const _category = filterIconsByCategory(filterValues.category, _type);
  const sortedIcons = sortHelper(_category, 'name');

  return sortedIcons;
};

/**
 * Filter options
 */

const sizeOptions = [
  {
    name: 'All',
    value: false
  },
  {
    name: 'Small',
    value: 'small'
  },
  {
    name: 'Medium',
    value: 'medium'
  },
  {
    name: 'Large',
    value: 'large'
  }
];

const colorOptions = [
  {
    name: 'Default color',
    value: 'color-black'
  },
  {
    name: 'Primary color',
    value: 'color-primary'
  }
];

const typeOptions = () => {
  const options = ['All'];

  lyneIcons.forEach((icon) => {
    const {
      type
    } = icon;

    if (options.indexOf(type) < 0) {
      options.push(type);
    }

  });

  return options;
};

const categoryOptions = () => {
  const options = ['All'];

  lyneIcons.forEach((icon) => {
    const {
      category
    } = icon;

    if (options.indexOf(category) < 0) {
      options.push(category);
    }

  });

  return options;
};

const filterOptions = {
  category: categoryOptions(),
  size: sizeOptions,
  type: typeOptions()
};

const filterValues = {
  category: categoryOptions()[0],
  size: sizeOptions[1].value,
  type: typeOptions()[0]
};

const icons = filterIcons(filterValues, lyneIcons);

export default {
  data() {
    return {
      color: 'color-black',
      colorOptions,
      filterOptions,
      filterValues,
      icons
    };
  },
  methods: {
    handleFilterChange() {
      this.$data.icons = filterIcons(this.$data.filterValues, lyneIcons);
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
    fill: currentColor;
  }

  .iconToken.color-black {
    color: black;
  }

  .iconToken.color-primary {
    color: red;
  }

</style>

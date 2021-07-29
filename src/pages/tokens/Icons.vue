<template>
  <Layout>
    <section class="section">
      <div class="container">
        <h1 class="title is-1">Icons</h1>

        <!-- Type switch -->
        <b-tabs
          v-model="$data.filterValues.type"
          type="is-boxed"
          :animated="false"
          @input="handleTypeChange"
        >

          <b-tab-item
            v-for="(type, index) in $data.filterOptions.type"
            :key="index"
            :label="type"
          >

          <!-- Filter category -->
          <div class="block">
            <p>Icon Category:</p>
            <b-select
              v-model="$data.filterValues.category"
              @change.native="handleFilterChange"
              placeholder="Choose a category"
            >
              <option
                v-for="(category, index) in $data.filterOptions.category"
                :value="category"
                :key="index"
              >
                {{ category }}
              </option>

            </b-select>
          </div>

          <!-- Search field -->
          <div class="block">
            <p>Search Keywords and name:</p>
            <b-input
              v-model="$data.filterValues.search"
              class="search-field"
              placeholder="Search..."
              type="search"
              icon="magnify"
              @input.native="handleFilterChange"
              ></b-input>
          </div>

          <div class="table-wrapper">
            {{$data.icons.length}} Icons
            <p v-if="$data.icons.length === 0">No icons to display</p>
            <table class="table is-fullwidth" v-if="$data.icons.length > 0">
              <thead>
                <tr>
                  <th>Icon</th>
                  <th>name</th>
                  <th>category</th>
                  <th>colorizable</th>
                  <th>scalable</th>
                  <th>keywords</th>
                  <th>download</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for='(icon) in $data.icons'
                  :key='icon.id'
                >
                  <td class="iconCell">
                    <span
                      v-html='icon.svg'
                      class='iconToken'
                      :class="[
                        icon.variants.size ? icon.variants.size : '',
                        icon.properties.color === true ? 'colorizable' : 'noncolorizable'
                      ]"
                    ></span>
                  </td>
                  <td class="textCell">{{icon.fullName}}</td>
                  <td class="textCell">{{icon.category}}</td>
                  <td class="textCell">{{icon.properties.color}}</td>
                  <td class="textCell">{{icon.properties.scalable}}</td>
                  <td class="textCell cell-keywords">{{icon.properties.keywords}}</td>
                  <td class="textCell">
                    <a v-on:click="downloadFile(icon)" :id='icon.id' :download='icon.fullName + ".svg"' href=””>
                      <i class="mdi mdi-download"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          </b-tab-item>
        </b-tabs>

      </div>
    </section>
  </Layout>
</template>

<script>
const lyneIcons = require('lyne-icons/dist/icons.json').icons;
const sortHelper = require('../../helpers/sort');

/**
 * Types
 */
const _typeOptions = (icons) => {
  const options = ['All'];

  icons.forEach((icon) => {
    const {
      type
    } = icon;

    if (options.indexOf(type) < 0) {
      options.push(type);
    }

  });

  return options;
};

const typeOptions = _typeOptions(lyneIcons);

/**
 * Categories
 */
const _categoriesForAllTypes = (icons, types) => {
  const categories = {};

  types.forEach((type) => {
    categories[type] = ['All'];
  });

  icons.forEach((icon) => {
    if (categories[icon.type].indexOf(icon.category) === -1) {
      categories[icon.type].push(icon.category);
    }
  });

  // sort
  types.forEach((type) => {
    categories[type] = categories[type].sort();
  });

  return categories;
};

const _allCategories = (typesWithCategories) => {
  const categories = ['All'];

  Object.keys(typesWithCategories)
    .forEach((type) => {
      typesWithCategories[type].forEach((category) => {
        if (categories.indexOf(category) === -1 && category !== 'All') {
          categories.push(category);
        }
      });
    });

  return categories.sort();
};

const categoriesForAllTypes = _categoriesForAllTypes(lyneIcons, typeOptions);
const allCategories = _allCategories(categoriesForAllTypes);

/**
 * Filtering
 */
const genericFilter = (property, value, icons) => {
  if (value === 'All') {
    return icons;
  }

  return icons.filter((icon) => icon[property] === value);
};

const filterBySearchTerm = (search, icons) => {
  if (!search || search.length < 1) {
    return icons;
  }

  const results = [];

  icons.forEach((icon) => {
    const foundInKeywords = icon.properties.keywords && icon.properties.keywords.indexOf(search) !== -1;
    const foundInName = icon.fullName && icon.fullName.indexOf(search) !== -1;

    if (foundInName || foundInKeywords) {
      results.push(icon);
    }
  });

  return results;
};

const filterIcons = (filterValues, icons) => {
  const currentTypeName = typeOptions[filterValues.type];
  const _type = genericFilter('type', currentTypeName, icons);
  const _category = genericFilter('category', filterValues.category, _type);
  const _search = filterBySearchTerm(filterValues.search, _category);
  const sortedIcons = sortHelper(_search, 'fullName');

  return sortedIcons;
};

export default {
  data() {
    return {
      filterOptions: {
        category: allCategories,
        type: typeOptions
      },
      filterValues: {
        category: 'All',
        search: '',
        type: 0
      },
      icons: []
    };
  },
  methods: {
    handleFilterChange() {
      this.$data.icons = filterIcons(this.$data.filterValues, lyneIcons);
    },
    handleTypeChange() {

      // set categories for type
      const currentType = typeOptions[this.$data.filterValues.type];

      if (currentType === 'All') {
        this.$data.filterOptions.category = allCategories;
      } else {
        this.$data.filterOptions.category = categoriesForAllTypes[currentType];
      }

      // reset filter values
      this.$data.filterValues.category = 'All';
      this.$data.filterValues.search = '';

      // filter icons
      this.handleFilterChange();
    }
  },
  mounted() {
    this.handleFilterChange();
  }
};
</script>

<style lang="scss">
  .search-field {

  }

  .table-wrapper {
    overflow-x: scroll;
  }

  table td.textCell {
    line-height: 100%;
    vertical-align: middle;
  }

  table td.textCell.cell-keywords {
    max-width: 150px;
  }

  table td.iconCell {
    vertical-align: middle;
    padding: 0;
  }

  .iconToken {
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
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

  .iconToken.color-black {
    color: black;
  }

  .iconToken.color-primary.colorizable {
    color: red;
  }

  .iconToken svg {
    display: block;
    fill: currentColor;
  }

</style>

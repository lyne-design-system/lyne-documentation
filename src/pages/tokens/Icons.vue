<template>
  <Layout>
    <section class="section">
      <div class="container">
        <lyne-title level="1" text="Icons" class="page-title"></lyne-title>

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
          >

            <template #header>
                {{type}}
                <b-tag
                  class="tag-count"
                  type="is-info"
                  rounded
                >{{$data.iconsCount[type]}}</b-tag>
            </template>

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

            <!-- Color switch -->
            <div
              class="block"
              v-if="$data.showColorOptions"
            >
              <p>Color:</p>

              <b-radio
                v-for="(colorVariant, index) in $data.colorOptions"
                :key="index"
                v-model="color"
                :name="'color' + type"
                :native-value="colorVariant.value"
              >
                {{colorVariant.name}}
              </b-radio>
            </div>
          </b-tab-item>
        </b-tabs>

        <div class="table-wrapper">
          <p v-if="!$data.filterIsPristine">
            {{$data.icons.length}} Icons
          </p>

          <p v-if="$data.icons.length === 0">No icons to display</p>
          <table class="table is-fullwidth" v-if="$data.icons.length > 0">
            <thead>
              <tr>
                <th>Icon</th>
                <th>name</th>
                <th>download</th>
                <th>category</th>
                <th>colorizable</th>
                <th>scalable</th>
                <th>keywords</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for='(icon) in $data.icons'
                :key='icon.id'
              >
                <td class="iconCell">
                  <span
                    v-html='$data.iconsSvgs[icon.fullName]'
                    class='iconToken'
                    :class="[
                      icon.variants.size ? icon.variants.size : '',
                      icon.properties.color === true ? 'colorizable' : 'noncolorizable',
                      icon.properties.color === true ? $data.color : ''
                    ]"
                  ></span>
                </td>
                <td class="textCell">{{icon.fullName}}</td>
                <td class="textCell">
                  <a
                    v-on:click="downloadFile(icon)"
                    :id='icon.id'
                    :download='icon.fullName + ".svg"'
                    href=””
                    class="download-button"
                  >
                    <i class="mdi mdi-download"></i>
                  </a>
                </td>
                <td class="textCell">{{icon.category}}</td>
                <td class="textCell">{{icon.properties.color}}</td>
                <td class="textCell">{{icon.properties.scalable}}</td>
                <td class="textCell cell-keywords">{{icon.properties.keywords}}</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  </Layout>
</template>

<script>
import * as lyneIconsRaw from 'lyne-icons/dist/iconsMeta.json';
import * as lyneIconsSvgsRaw from 'lyne-icons/dist/icons.json';
import sortByKey from '../../helpers/sort';

const lyneIcons = lyneIconsRaw.icons;
const lyneIconsSvgs = lyneIconsSvgsRaw.icons;

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
  const sortedIcons = sortByKey(_search, 'fullName');

  return sortedIcons;
};

/**
 * Other helpers
 */
const iconsCountForTypes = (icons, types) => {
  const counts = {};

  types.forEach((type) => {
    counts[type] = genericFilter('type', type, icons).length;
  });

  return counts;
};

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

const currentIconsHaveColorizableIcons = (icons) => icons.filter((icon) => icon.properties.color === true).length > 0;

export default {
  data() {
    return {
      color: colorOptions[0].value,
      colorOptions,
      filterIsPristine: true,
      filterOptions: {
        category: allCategories,
        type: typeOptions
      },
      filterValues: {
        category: 'All',
        search: '',
        type: 0
      },
      icons: [],
      iconsCount: iconsCountForTypes(lyneIcons, typeOptions),
      iconsSvgs: lyneIconsSvgs,
      showColorOptions: false
    };
  },
  methods: {
    downloadFile(icon) {
      const text = lyneIconsSvgs[icon.fullName];
      const data = new Blob([text], {
        type: 'text/plain'
      });
      const url = window.URL.createObjectURL(data);

      document.getElementById(icon.id).href = url;
    },
    handleFilterChange() {
      this.$data.icons = filterIcons(this.$data.filterValues, lyneIcons);

      const searchIsEmpty = this.$data.filterValues.search.length === 0;
      const categoryIsAll = this.$data.filterValues.category === 'All';

      this.$data.filterIsPristine = searchIsEmpty && categoryIsAll;
      this.$data.showColorOptions = currentIconsHaveColorizableIcons(this.$data.icons);
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

      // reset color
      this.$data.color = colorOptions[0].value;

      // filter icons
      this.handleFilterChange();
    }
  },
  mounted() {
    this.handleFilterChange();
  }
};
</script>

<style lang="scss" scoped>
  .tag-count {
    margin-left: .5rem;
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
    height: 24px;
  }

  .iconToken.medium {
    height: 36px;
  }

  .iconToken.large {
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

  .download-button {
    display: flex;
    width: 3rem;
    height: 3rem;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.1);
  }

</style>

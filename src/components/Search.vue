<template>
  <b-autocomplete
    v-model="searchTerm"
    :data="searchResults"
    placeholder="Search"
    icon="magnify"
    group-field="path"
    group-options="results"
    @select="opt => handleSelect(opt)"
    open-on-focus
  >
    <template slot="group" slot-scope="props">
      <span v-html="props.group"></span>
    </template>

    <template slot-scope="props">
      <span class="result-item" v-html="props.option.text"></span>
    </template>

  </b-autocomplete>
</template>

<static-query>
  query {
    authorContent: allLyneContent {
      edges {
        node {
          id
          path
          content
        }
      }
    }
  }
</static-query>

<script>
import Flexsearch from 'flexsearch';
import { getPathOfNavItem } from '../helpers/navigation';
import navData from '../navigation';

const stripHtml = (htmlString) => {
  // hacky way of getting rid of all html elements in the result string
  const tmp = document.createElement('DIV');

  tmp.innerHTML = htmlString;

  return tmp.textContent || tmp.innerText || '';
};

const stripResultItems = (content, searchTerm) => {
  const indexes = [...content.matchAll(new RegExp(searchTerm, 'giu'))].map((a) => a.index);
  const amountOfStringsBeforeAndAfterResult = 20;
  const results = [];

  indexes.forEach((index) => {
    const contentPart = content.substring(index - amountOfStringsBeforeAndAfterResult, index + searchTerm.length + amountOfStringsBeforeAndAfterResult);

    results.push(`... ${contentPart} ...`);
  });

  return results;
};

const highlightSearchTerm = (results, searchTerm) => results.map((result) => {

  // Make sure there's no regex special chars
  const sanitizedSearchTerm = searchTerm.replace(/\W/gu, '');

  // Build regex
  const regexForContent = new RegExp(sanitizedSearchTerm, 'giu');

  // Replace content where regex matches
  return result.replace(regexForContent, '<span class="search-highlight">$&</span>');

});

const addUrlToResults = (results, path) => results.map((result) => ({
  text: result,
  url: path
}));

const formatResults = (results, searchTerm) => {
  const returnResults = [];

  results.forEach((result) => {
    const textContent = stripHtml(result.content);
    const strippedResults = stripResultItems(textContent, searchTerm);
    const finalResults = highlightSearchTerm(strippedResults, searchTerm);
    const addUrl = addUrlToResults(finalResults, result.path);
    const paths = getPathOfNavItem(navData, result.path, true);

    // means, that the page with the results is not indexed in navigation data
    if (!paths) {
      return;
    }

    returnResults.push({
      path: paths.join('<span class="breadcrump-arrow">></span>'),
      results: addUrl
    });
  });

  return returnResults;

};

export default {
  beforeMount() {

    this.index = new Flexsearch({
      doc: {
        field: 'content',
        id: 'id'
      },
      tokenize: 'forward'
    });

    this.index.add(this.$static.authorContent.edges.map((e) => e.node));
  },
  computed: {
    searchResults() {
      if (this.index === null || !this.isValidSearchTerm(this.searchTerm)) return [];

      const results = this.index.search({
        limit: 10,
        query: this.searchTerm
      });

      const formatedResults = formatResults(results, this.searchTerm);

      return formatedResults;
    }
  },
  data() {
    return {
      index: null,
      searchTerm: ''
    };
  },
  methods: {
    handleSelect(result) {
      if (process.isClient) {
        window.location = result.url;
      }
    },
    isValidSearchTerm(searchTerm) {
      return searchTerm
        ? searchTerm.length > 2
        : false;
    }
  },
  name: 'Search'
};
</script>

<style lang="scss">

.autocomplete .dropdown-menu.dropdown-menu {
  max-width: unset;
  width: 400px;
}

.search-highlight {
  font-weight: bold;
  color: $link;
}

.breadcrump-arrow {
  color: $link;
  padding: 0 .5rem;
}

</style>

<template>
  <div>

    <input
      id="search"
      v-model="searchTerm"
      class="input"
      type="text"
      placeholder="Search"
    >

    <div v-if="searchResults.length > 0">
      <div
        v-for="(result, index) in searchResults"
        :key="index"
      >
        <p v-html="result.path"></p>

        <ul>
          <li
            v-for="(resultItem, index) in result.results"
            :key="index"
          >
            <span v-html="resultItem"></span>
          </li>
        </ul>

      </div>
    </div>

    <div v-if="searchResults.length < 1 && isValidSearchTerm(searchTerm)">No results</div>

  </div>
</template>

<static-query>
  query {
    authorContent: allLyneContent {
      edges {
        node {
          id
          path
          content
          title
        }
      }
    }
  }
</static-query>

<script>
import Flexsearch from 'flexsearch';
import getPathOfNavItem from '../helpers/navigation';
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

const formatResults = (results, searchTerm) => {
  const returnResults = [];

  results.forEach((result) => {
    const textContent = stripHtml(result.content);
    const strippedResults = stripResultItems(textContent, searchTerm);
    const finalResults = highlightSearchTerm(strippedResults, searchTerm);
    const paths = getPathOfNavItem(navData, result.path, true);

    // means, that the page with the results is not indexed in navigation data
    if (!paths) {
      return;
    }

    returnResults.push({
      path: paths.join('<span class="breadcrump-arrow">></span>'),
      results: finalResults
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
    isValidSearchTerm (searchTerm) {
      return searchTerm.length > 2;
    }
  },
  name: 'Search'
};
</script>

<style lang="scss">
@import "../styles/bulma.scss";

.search-highlight {
  font-weight: bold;
  color: $link;
}

.breadcrump-arrow {
  color: $link;
  padding: 0 .5rem;
}
</style>

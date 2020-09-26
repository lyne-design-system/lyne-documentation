<template>
  <Layout>
    <input
      id="search"
      v-model="searchTerm"
      class="input"
      type="text"
      placeholder="Search">
    {{ searchResults }}
  </Layout>
</template>

<script>
export default {
  computed: {
    searchResults () {
      const {
        searchTerm
      } = this;

      if (searchTerm.length < 3) {
        return [];
      }

      return this.$search.search({
        limit: 5,
        query: searchTerm
      });
    }
  },
  data: () => ({
    searchTerm: ''
  })
};

</script>

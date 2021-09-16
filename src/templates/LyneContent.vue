<template>
  <Layout >
    <section class="section">
      <div  class="container">
        <div class="content" v-html="$page.contentItem.content"></div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query LyneContent ($path: String){
  contentItem: lyneContent (path: $path) {
    content
  }
}
</page-query>

<style lang="scss" scoped>

  .icon.icon-link {
    display: none !important;
  }

</style>

<template>
  <Layout>

    <section class="section">
      <div class="container">
        <h1 class="title is-1">{{$page.component.component.title}}</h1>

        <div class="content">
          <div
            v-for="(comp) in $page.variants.allComponentVariants"
            :key="comp.id"
          >
            <h2>Variant: {{comp.title}}</h2>
            <p>Description: {{comp.description}}</p>

            <button
              class="button"
              @click='openStackblitz(comp, $page.component.component.componentName)'
            >
              <span>Edit on Stackblitz</span>
              <span class="icon is-small">
                <i class="mdi mdi-launch"></i>
              </span>
            </button>

            <h3>Preview</h3>
            <component
              v-bind:is="$page.component.component.componentName"
              v-bind="comp.properties"
            ></component>
          </div>

          <hr>
          <h2><i>Readme file from stencil build</i></h2>
          <div v-html="$page.mdDoc.edges[0].node.content"></div>

        </div>
      </div>
    </section>

  </Layout>
</template>

<page-query>
query(
  $compId: lyneTypes_ItemId
  $componentDistPath: String
) {
  component: lyne {
    component(filter: { id: { eq: $compId } }) {
      title
      componentName
    }
  }
  variants: lyne {
    allComponentVariants(
      filter: { component: { eq: $compId } }
    ) {
      id
      title
      description
      properties
    }
  }
  mdDoc: allMdDoc(
    filter: { fileInfo: { directory: { in: [$componentDistPath] } } }
  ) {
    edges {
      node {
        content
      }
    }
  }
}
</page-query>

<script>
import stackblitz from '../helpers/stackblitz';

export default {
  methods: {
    openStackblitz(elem, name) {

      const properties = Object.entries(elem.properties)
        .map(([
          key,
          val
        ]) => `${key}="${val}"`)
        .join(' ');

      const description = `Lyne Components: ${name}`;
      const element = `<${name} ${properties}"></${name}>`;

      stackblitz(description, element);
    }
  },
  mounted() {

    // This makes sure that components only get rendered on the client.

    /* eslint-disable global-require */
    window.lyneComps = require('lyne-test/loader');
    /* eslint-enable global-require */

    window.lyneComps.defineCustomElements();
  },
  name: 'LyneComponent'
};
</script>

<style lang="scss" scoped>
</style>

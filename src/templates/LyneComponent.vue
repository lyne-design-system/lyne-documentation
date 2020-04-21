<template>
  <Layout>
    <h1>{{$page.component.component.title}}</h1>

    <hr>
    <h2><i>JsonDocs contents from stencil bulid</i></h2>
    {{jsonDocsForComp($page.component.component.componentName)}}

    <hr>
    <h2><i>Readme file from stencil build</i></h2>
    <p v-html="$page.mdDoc.edges[0].node.content"></p>
<!--
    <div
      v-for="(comp) in $page.variants.allComponentVariants"
      :key="comp.id"
    >
      <h2>{{comp.title}}</h2>
      <p>{{comp.description}}</p>

      <h3>Preview</h3>
      <ClientOnly>
        <component
        v-bind:is="$page.component.component.componentName"
        v-bind="comp.properties"
        ></component>
      </ClientOnly>
      <hr>
    </div>
-->
  </Layout>
</template>

<page-query>

query($compId: lyneTypes_ItemId, $componentDistPath: String) {
  component: lyne {
    component(filter: {id: {eq: $compId}}) {
      title
      componentName
    }
  },
  variants: lyne {
    allComponentVariants(filter: { component: {eq: $compId} }) {
      id
      title
      description
      properties
    }
  },
  mdDoc: allMdDoc(
    filter: {
      fileInfo: {
        directory: {
          in: [
            $componentDistPath
          ]
        }
      }
    }
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
const lyneComponentDocs = require('lyne-test/dist/documentation/jsonDocs.json');

export default {
  name: 'LyneComponent',
  data() {
    return {
      docs: lyneComponentDocs
    }
  },
  methods: {

    // Get component from jsonDocs.json
    jsonDocsForComp(comp) {
      const foundComponent = lyneComponentDocs.components.filter((lyneComponent) => {
        return lyneComponent.tag === comp;
      });

      if (foundComponent && foundComponent.length === 1) {
        return foundComponent[0];
      }

      return {};
    }

  },
  mounted() {

    // This makes sure that components only get rendered on the
    // client.
    // TODO: enable SSR
    // window.lyneComps = require('lyne-test/loader');
    // window.lyneComps.defineCustomElements();
  }
}

</script>

<style>
</style>

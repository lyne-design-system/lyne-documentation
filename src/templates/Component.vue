<template>
  <Layout>

    <section class="section">
      <div class="container">
        <h1 class="title is-1">{{$data.title}}</h1>

        <div class="content">
          <div
            v-for="(comp) in $data.variants"
            :key="comp.id"
          >
            <h2 class="title is-2">Variant: {{comp.title}}</h2>

            <h3>Preview</h3>

            <component
              v-bind:is="$data.title"
              v-bind="comp.attrs"
              v-html='comp.slots && comp.slots.length > 0 ? comp.slots.join() : ""'
            ></component>

            <h3>Sandbox</h3>
            <Codepen :contents='{
              "title": `Lyne Components Sandbox: ${$data.title}`,
              "html": codepenHtml(comp, $data.title)
              }'
            />

            <hr>
          </div>

          <h2>Documentation</h2>
          <div v-html="$page.mdDoc.edges[0].node.content"></div>

        </div>
      </div>
    </section>

  </Layout>
</template>

<page-query>
query(
  $componentDistPath: String
) {
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
import Codepen from '../components/Codepen.vue';
import codepen from '../helpers/codepen';
import components from '../components';

export default {
  components: {
    Codepen
  },
  data() {
    return {
      title: '',
      variants: []
    };
  },
  methods: {
    codepenHtml(elem, name) {
      return codepen(elem, name);
    }
  },
  mounted() {

    // This makes sure that components only get rendered on the client.

    /* eslint-disable global-require */
    window.lyneComps = require('lyne-test/loader');
    /* eslint-enable global-require */

    window.lyneComps.defineCustomElements()
      .then(() => {
        const componentsForName = components.filter((comp) => comp.name === this.$context.compId);

        if (componentsForName.length === 1) {
          this.$data.variants = componentsForName[0].variants;
        }

        this.$data.title = this.$context.compId;
      });
  },
  name: 'LyneComponent'
};
</script>

<style lang="scss" scoped>
</style>

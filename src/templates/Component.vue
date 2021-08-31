<template>
  <Layout>

    <section class="section">
      <div class="container">
        <h1 class="title is-1">{{$data.title}}</h1>
        <div class="content">
          <h2 class="title is-2">Variants</h2>
          <p>Checkout the storybook for this component to play around with all the variants: <a :href="$data.storybook" target="_blank">Storybook</a></p>
          <div
            v-for="(comp) in $data.variants"
            :key="comp.id"
          >
            <h3 class="title is-3">Variant: {{comp.title}}</h3>

            <div
              class="variant-container"
              :style="comp.containerStyle ? comp.containerStyle : ''"
            >
              <component
                v-bind:is="$data.title"
                v-bind="comp.attrs"
                v-html='comp.slots && comp.slots.length > 0 ? comp.slots.join("") : ""'
              ></component>
            </div>

            <Codepen
              :contents='{
                "title": `Lyne Components Sandbox: ${$data.title}`,
                "html": codepenHtml(comp, $data.title)
              }'
              class="variant-codepen"
            />

          </div>

          <h2 class="title is-2">Documentation</h2>
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

const setLocalData = (context, _data) => {

  if (!context) {
    return;
  }

  const data = _data;

  const componentsForName = components.filter((comp) => comp.name === context.compId);

  if (componentsForName.length === 1) {
    const comp = componentsForName[0];

    data.variants = comp.variants;
    data.storybook = comp.storybook;
  }

  data.title = context.compId;
};

export default {
  components: {
    Codepen
  },
  data() {
    return {
      storybook: '',
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
    setLocalData(this.$context, this.$data);
  },
  name: 'LyneComponent',
  updated() {
    setLocalData(this.$context, this.$data);
  }
};
</script>

<style lang="scss" scoped>

.variant-container {
  padding: 36px;
  margin-bottom: 16px;
  background-color: $color-milk-default;
  border-radius: 8px;
}

.variant-codepen {
  margin-bottom: 80px;
}

</style>

<template>
  <Layout>

    <section class="section">
      <div class="container">
        <lyne-title level="1" :text="$data.title" class="page-title"></lyne-title>

        <div class="content">
          <lyne-title level="2" text="Variants"></lyne-title>

          <p>Checkout the storybook for this component to play around with all the variants: <a :href="$data.storybook" target="_blank">Storybook</a></p>
          <div
            v-for="(comp) in $data.variants"
            :key="comp.id"
          >
            <lyne-title level="3" :text="`Variant: ${comp.title}`"></lyne-title>

            <div
              class="variant-container"
              :class="comp.containerClass ? comp.containerClass : ''"
              :style="comp.containerStyle ? comp.containerStyle : ''"
            >
              <component
                v-bind:is="$data.title"
                v-bind="comp.attrs"
                v-html='comp.slots && comp.slots.length > 0 ? comp.slots.join("") : ""'
              ></component>
            </div>

            <lyne-button
              variant="secondary"
              label="Copy"
              :value="`code-sample-${index}`"
              v-on="{
                'lyne-button_click': copyClick.bind(false, rawComponentHtml(comp, $data.title))
              }"
            />

            <code>
              <pre v-html="componentHtml(comp, $data.title)" />
            </code>

            <Codepen
              :contents='{
                "title": `Lyne Components Sandbox: ${$data.title}`,
                "html": codepenHtml(comp, $data.title)
              }'
              class="variant-codepen"
            />

          </div>

          <lyne-title level="2" text="Documentation"></lyne-title>

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
import * as pjs from 'prismjs';
import 'prismjs/themes/prism.css';

import {
  codepenHtml,
  componentHtml
} from '../helpers/codepen';
import Codepen from '../components/Codepen.vue';
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
      return codepenHtml(elem, name);
    },
    componentHtml(elem, name) {
      const rawHtml = componentHtml(elem, name);
      const tokenized = pjs.highlight(rawHtml, pjs.languages.html, 'html');

      return tokenized;
    },
    copyClick(content) {
      navigator.clipboard.writeText(content);
    },
    rawComponentHtml(elem, name) {
      const rawHtml = componentHtml(elem, name);

      return rawHtml;
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

.variant-container.white-bg {
  background-color: $color-white-default;
  border: 2px solid $color-milk-default;
}

.variant-codepen {
  margin-bottom: 80px;
}

</style>

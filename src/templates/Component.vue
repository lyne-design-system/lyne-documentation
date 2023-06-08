<template>
  <Layout>
    <section class="section">
      <div class="container">
        <sbb-title level="1" class="page-title">{{ $data.title }}</sbb-title>

        <div class="content">
          <sbb-title level="2">Variants</sbb-title>

          <p>
            Checkout the storybook for this component to play around with all the variants:
            <a :href="$data.storybook" target="_blank">Storybook</a>
          </p>

          <div class="variants" v-for="(story, index) in $data.stories" :key="index">
            <sbb-title level="3">{{
              `Variant: ${
                story.documentation && story.documentation.title
                  ? story.documentation.title
                  : '(no title)'
              }`
            }}</sbb-title>

            <div
              v-html="story.element"
              class="variant-container"
            />

            <pre v-html="componentHtml(story.elementRaw)" class="code-view" />

            <div class="code-buttons">
              <Codepen
                :contents="{
                  title: `Lyne Components Sandbox: ${$data.title}`,
                  html: codepenHtml(story.elementRaw, $data.title),
                }"
                class="variant-codepen"
              />

              <sbb-button
                variant="secondary"
                label="Copy"
                size="m"
                icon-name="form-small"
                v-on="{
                  click: copyClick.bind(false, story.elementRaw),
                }"
              >
              </sbb-button>
            </div>
          </div>

          <sbb-title level="2">Documentation</sbb-title>

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
import 'prismjs/themes/prism-tomorrow.css';
import globalConfig from '../../global.config';

import codepenHtml from '../helpers/codepen';
import prettier from '../helpers/prettier';
import Codepen from '../components/Codepen.vue';

const setLocalData = (context, _data) => {
  if (!context) {
    return;
  }

  if (context.compId === _data.title) {
    return;
  }

  const data = _data;

  data.title = context.compId;
  data.storybook = globalConfig.storybookBaseUrl;

  /**
   * window object is required in storybundle, therefore we should only do it
   * when the component gets mounted in the client context or is updated
   */
  const lyneStories = require('@sbb-esta/lyne-components/dist/collection/storybundle');

  const rawStories = lyneStories[context.compId];
  const stories = [];
  let ignoreArgs = [];

  const defaultExport = rawStories.default;
  const defaultExportKeys = Object.keys(defaultExport);

  if (defaultExportKeys.includes('documentation')) {
    const docu = defaultExport.documentation;
    const docuKeys = Object.keys(docu);

    if (docuKeys.includes('disableArgs')) {
      ignoreArgs = docu.disableArgs;
    }
  }

  Object.keys(rawStories).forEach((key) => {
    const unCamelCase = (string) =>
      string.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3');

    if (key !== 'default') {
      const storyObject = {};
      const story = rawStories[key];
      storyObject.documentation = {};
      storyObject.documentation.title = unCamelCase(key);

      // set html
      if (story && Object.keys(story).includes('args')) {
        storyObject.element = story.render(story.args).outerHTML;
        const rawElement = story.render(story.args);

        // remove attributes that are defined in disableArgs
        if (ignoreArgs.length > 0) {
          ignoreArgs.forEach((arg) => {
            rawElement.removeAttribute(arg);
          });
        }

        storyObject.elementRaw = rawElement.outerHTML;
      }

      stories.push(storyObject);
    }
  });
  data.stories = stories;
};

export default {
  components: {
    Codepen,
  },
  data() {
    return {
      stories: [],
      storybook: '',
      title: '',
    };
  },
  methods: {
    codepenHtml(elem, name) {
      return codepenHtml(elem, name);
    },
    componentHtml(elem) {
      const prettified = prettier(elem);
      const tokenized = pjs.highlight(prettified, pjs.languages.html, 'html');

      return tokenized;
    },
    copyClick(content) {
      navigator.clipboard.writeText(content);
    },
  },
  mounted() {
    setLocalData(this.$context, this.$data);
  },
  name: 'LyneComponent',
  updated() {
    setLocalData(this.$context, this.$data);
  },
};
</script>

<style lang="scss" scoped>
@import '~/src/styles/index';

.variants {
  position: relative;
}

.variant-container {
  position: relative;
  z-index: 1;
  padding: 36px;
  margin-bottom: 16px;
  background-color: $sbb-color-milk-default;
  border-radius: 8px;
}

.code-buttons {
  display: flex;
  margin-bottom: 80px;
}
.variant-codepen {
  margin-right: 1rem;
}

.code-view {
  background-color: $sbb-color-black-default;
  border-radius: 8px;
}
</style>

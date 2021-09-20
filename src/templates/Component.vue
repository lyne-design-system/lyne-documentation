<template>
  <Layout>

    <section class="section">
      <div class="container">

        <lyne-title level="1" :text="$data.title" class="page-title"></lyne-title>

        <div class="content">
          <lyne-title level="2" text="Variants"></lyne-title>

          <p>Checkout the storybook for this component to play around with all the variants: <a :href="$data.storybook" target="_blank">Storybook</a></p>

          <div
            v-for="(story, index) in $data.stories"
            :key="index"
          >
            <lyne-title level="3" :text="`Variant: ${story.documentation && story.documentation.title ? story.documentation.title : '(no title)'}`"></lyne-title>

            <div
              v-html="story.element"
              class="variant-container"
              :style="story.documentation.container.styles"
            />

            <pre
              v-html="componentHtml(story.elementRaw)"
              class="code-view"
            />

            <div class="code-buttons">
              <Codepen
                :contents='{
                  "title": `Lyne Components Sandbox: ${$data.title}`,
                  "html": codepenHtml(story.elementRaw, $data.title)
                }'
                class="variant-codepen"
              />

              <lyne-button
                variant="secondary"
                label="Copy"
                size="small"
                icon
                v-on="{
                  'lyne-button_click': copyClick.bind(false, story.elementRaw)
                }"
              >
                <CopyIcon />
              </lyne-button>

            </div>
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
import 'prismjs/themes/prism-tomorrow.css';
import CopyIcon from 'lyne-icons/dist/icons/form-small.svg';
import globalConfig from '../../global.config';

import codepenHtml from '../helpers/codepen';
import prettier from '../helpers/prettier';
import Codepen from '../components/Codepen.vue';

const lyneStories = require('lyne-test/dist/collection/storybundle');

const setLocalData = (context, _data) => {

  if (!context) {
    return;
  }

  if (context.compId === _data.title) {
    return;
  }

  const data = _data;

  data.title = context.compId;
  data.storybook = `${globalConfig.storybookBaseUrl}/?path=/story/${context.compId}`;

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

  Object.keys(rawStories)
    .forEach((key) => {
      if (key !== 'default') {
        const storyObject = {};
        const story = rawStories[key];
        const storyKeys = Object.keys(story);

        // handle documentation key
        if (storyKeys.includes('documentation')) {
          storyObject.documentation = story.documentation;
        } else {
          storyObject.documentation = {};
        }

        // handle container key
        const docuKeys = Object.keys(story.documentation);

        if (docuKeys.includes('container')) {
          storyObject.documentation.container = story.documentation.container;
        } else {
          storyObject.documentation.container = {};
        }

        // adobt styles
        const containerKeys = Object.keys(story.documentation.container);

        if (containerKeys.includes('styles')) {
          const rawStyles = storyObject.documentation.container.styles;
          const stylesKeys = Object.keys(rawStyles);
          let styles = '';

          stylesKeys.forEach((styleKey) => {
            const style = rawStyles[styleKey];

            styles += `${styleKey}: ${style};`;
          });

          storyObject.documentation.container.styles = styles;
        } else {
          storyObject.documentation.container.styles = '';
        }

        // set html
        storyObject.element = story(story.args).outerHTML;
        const rawElement = story(story.args);

        // remove attributes that are defined in disableArgs
        if (ignoreArgs.length > 0) {
          ignoreArgs.forEach((arg) => {
            rawElement.removeAttribute(arg);
          });
        }

        storyObject.elementRaw = rawElement.outerHTML;

        stories.push(storyObject);
      }
    });

  data.stories = stories;

};

export default {
  components: {
    Codepen,
    CopyIcon
  },
  data() {
    return {
      stories: [],
      storybook: '',
      title: ''
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
@import "~/src/styles/index";

.variant-container {
  padding: 36px;
  margin-bottom: 16px;
  background-color: $color-milk-default;
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
  background-color: $color-black-default;
  border-radius: 8px;
}

</style>

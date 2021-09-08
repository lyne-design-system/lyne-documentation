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

            <div v-html="story.element" />

            <code>
              <pre v-html="componentHtml(story.elementRaw)" />
            </code>

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

          <!--
          <div
            v-for="(comp) in $data.variants"
            :key="comp.id"
          >

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

            <code>
              <pre v-html="componentHtml(comp, $data.title)" />
            </code>

            <div class="code-buttons">
              <Codepen
                :contents='{
                  "title": `Lyne Components Sandbox: ${$data.title}`,
                  "html": codepenHtml(comp, $data.title)
                }'
                class="variant-codepen"
              />

              <lyne-button
                variant="secondary"
                label="Copy"
                size="small"
                icon
                v-on="{
                  'lyne-button_click': copyClick.bind(false, rawComponentHtml(comp, $data.title))
                }"
              >
                <CopyIcon />
              </lyne-button>
            </div>

          </div>
          -->

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
import CopyIcon from 'lyne-icons/dist/icons/form-small.svg';
import globalConfig from '../../global.config';

import codepenHtml from '../helpers/codepen';
import prettier from '../helpers/prettier';
import Codepen from '../components/Codepen.vue';
import components from '../components';

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

  Object.keys(rawStories)
    .forEach((key) => {
      if (key !== 'default') {
        const storyObject = {};
        const story = rawStories[key];
        const storyKeys = Object.keys(story);

        storyObject.documentation = story.documentation;

        if (storyKeys.includes('decorators')) {
          const decorator = story.decorators[0](story.args);
          const decoratorElement = document.createRange()
            .createContextualFragment(decorator.outerHTML);
          const placeholder = document.createElement('div');
          const rawElement = story(story.args);

          decoratorElement.firstChild.appendChild(rawElement);
          placeholder.appendChild(decoratorElement);

          storyObject.element = placeholder.outerHTML;
          storyObject.elementRaw = rawElement.outerHTML;
        } else {
          storyObject.element = story(story.args).outerHTML;
          storyObject.elementRaw = storyObject.element;
        }

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
  created() {
    setLocalData(this.$context, this.$data);
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

.code-buttons {
  display: flex;
  margin-bottom: 80px;
}
.variant-codepen {
  margin-right: 1rem;
}

</style>

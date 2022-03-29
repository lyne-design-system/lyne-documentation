<template>
  <Layout>
    <section class="section">
      <div class="container">
        <div class="content">

          <lyne-title level="1" text="Design Tokens" class="page-title"></lyne-title>

          <lyne-title level="2" text="Access"></lyne-title>

          <p>Our managed system of Design Tokens can be either accessed via npm or our cdn:</p>
          <ul>
            <li
              v-for="(link, index) in $data.accessLinks"
              :key="index"
            >
              <a
                :href="link.url"
                target="_blank"
                rel="noopener"
              >{{link.name}}</a>
            </li>
          </ul>

          <lyne-title level="2" text="Source"></lyne-title>

          <p>The source repository (where design tokens are defined and generated) can be found on GitHub:</p>
          <a
            href="https://github.com/lyne-design-system/lyne-design-tokens"
            target="_blank"
            rel="noopener"
          >lyne-design-tokens</a>

          <lyne-title level="2" text="Categories"></lyne-title>

          <p>We define and provide information for Design Tokens in the following Categories</p>
          <ul>
            <li
              v-for="(link, index) in $data.categories"
              :key="index"
            >
              <g-link :to="'tokens/' + link.url + '/'">{{link.name}}</g-link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>

const accessLinks = [
  {
    name: 'CDN',
    url: 'https://lyne-design-tokens.netlify.app/'
  },
  {
    name: 'NPM',
    url: 'https://www.npmjs.com/package/lyne-design-tokens'
  }
];

const categories = [
  {
    name: 'Animation',
    url: 'animation'
  },
  {
    name: 'Border',
    url: 'border'
  },
  {
    name: 'Breakpoint',
    url: 'breakpoint'
  },
  {
    name: 'Color',
    url: 'color'
  },
  {
    name: 'Icons',
    url: 'icons'
  },
  {
    name: 'Shadow',
    url: 'shadow'
  },
  {
    name: 'Size',
    url: 'size'
  },
  {
    name: 'Spacing',
    url: 'spacing'
  },
  {
    name: 'Typography',
    url: 'typo'
  }
];

export default {
  data() {
    return {
      accessLinks,
      categories
    };
  }
};
</script>

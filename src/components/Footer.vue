<template>

  <footer>
    Lyne Design System:
    <ul>
      <li
        v-for="(link) in $data.links"
        :key="link.href"
      >
        <a
          :href="link.href"
          target="_blank"
          rel="noopener"
        >{{link.title}} v{{link.version}}</a>
      </li>

    </ul>
  </footer>

</template>

<script>
const lyneComponentsVersion = require('lyne-test/package.json').version;
const lyneDesignTokensVersion = require('lyne-design-tokens/package.json').version;
const lyneIconsVersion = require('lyne-icons/package.json').version;
const globalConfig = require('../../global.config');

export default {
  data: () => {
    const dataExport = {
      links: {
        components: {
          link: 'https://github.com/lyne-design-system/lyne-components',
          title: 'lyne-components',
          version: lyneComponentsVersion
        },
        documentation: {
          link: 'https://github.com/lyne-design-system/lyne-documentation',
          title: 'lyne-documentation',
          version: ''
        },
        icons: {
          link: 'https://github.com/lyne-design-system/lyne-icons',
          title: 'lyne-icons',
          version: lyneIconsVersion
        },
        tokens: {
          link: 'https://github.com/lyne-design-system/lyne-design-tokens',
          title: 'lyne-design-tokens',
          version: lyneDesignTokensVersion
        }
      }
    };

    return dataExport;
  },
  async mounted () {
    try {
      const apiResult = await fetch(globalConfig.githubApiLatestRelease);
      const data = await apiResult.json();

      this.links.documentation.version = data['tag_name'];
      console.log(this.lyneDocumentationVersion);
    } catch (err) {
      console.log('There was an error fetching latest lyne-documentation release from github api');
      console.log(err);
    }
  },
  name: 'Footer'
};

</script>

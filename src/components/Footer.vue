<template>

  <footer class="footer">
    <div class="content">

      <h2 class="title is-5">Packages by Lyne Design System</h2>
      <ul>
        <li
          v-for="(link) in $data.links"
          :key="link.href"
        >
          <a
            :href="link.link"
            target="_blank"
            rel="noopener"
          >{{link.title}} <span class="tag is-info">{{link.version}}</span></a>
        </li>
      </ul>

      <h2 class="title is-5">Further Ressources</h2>
      <ul>
        <li>
          <g-link to="/deployments/">Storybook version history of lyne-components</g-link>
        </li>
        <li>
          <g-link to="/playground/">CMS playground</g-link>
        </li>
      </ul>

    </div>
  </footer>

</template>

<script>
const lyneComponentsVersion = require('lyne-test/package.json').version;
const lyneDesignTokensVersion = require('lyne-design-tokens/package.json').version;
const lyneIconsVersion = require('lyne-icons/package.json').version;
const documentationPackageJson = require('../../package.json');

const lyneDocumentationVersion = '0.0.0';

export default {
  data() {
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
          version: lyneDocumentationVersion
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
  async mounted() {
    try {
      const versionData = await fetch('/version.txt');

      if (!versionData.ok) {
        throw new Error('Version file not found');
      }

      let versionNumber = await versionData.text();

      if (versionNumber.trim() === '0.0.0') {
        versionNumber = documentationPackageJson.version;
      }

      this.links.documentation.version = versionNumber;
    } catch (err) {
      console.log(`Error in getting version.txt: ${err}`);
    }
  },
  name: 'Footer'
};

</script>

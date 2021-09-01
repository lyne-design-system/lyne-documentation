<template>

  <footer class="footer">
    <div class="content">

      <lyne-title level="2" visual-level="5" text="Packages by Lyne Design System"></lyne-title>
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

      <lyne-title level="2" visual-level="5" text="Further Ressources"></lyne-title>
      <ul>
        <li>
          <g-link to="/deployments/">Storybook version history of lyne-components</g-link>
        </li>
      </ul>

      <lyne-title level="2" visual-level="5" text="Notice"></lyne-title>
      <!-- eslint-disable-next-line max-len -->
      <p>We intend to build the Lyne documentation platform based on the <a href="https://github.com/lyne-design-system/lyne-documentation/blob/master/content/information-architecture.md">here documented Information Architecture(IA)</a> and will enhance the documentation platform once we have the content available. The state of the Lyne documentation platform is, and will always be — like the entire system, <em>work in progress (WIP)</em> — inspired by <a href="https://carbondesignsystem.com">Carbon</a>, <a href="https://duetds.com">Duet</a>, <a href="https://boltdesignsystem.com">Bolt</a>, <a href="https://spectrum.adobe.com">Spectrum</a>. The documentation platform uses some of their content until Lyne will be mature enough/we are enough contributors from different disciplines to provide a more holistic perspective on the topic and the necessary resources get provided to document them accordingly.</p>
      <p>Lyne Design System is <span class="tag is-info">🧪 experimental</span> at the moment — with enthusiasm. Do not use the project until it has left infancy.</p>
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

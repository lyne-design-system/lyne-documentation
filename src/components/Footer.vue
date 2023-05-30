<template>
  <footer class="footer">
    <div class="content">
      <sbb-title level="2" visual-level="5">Relevant Packages</sbb-title>
      <ul>
        <li v-for="link in $data.links" :key="link.href">
          <a :href="link.link" target="_blank" rel="noopener"
            >{{ link.title }} <span class="tag-mark">{{ link.version }}</span></a
          >
        </li>
      </ul>

      <sbb-title level="2" visual-level="5">Further Resources</sbb-title>
      <ul>
        <li>
          <a :href="$data.storybookUrl">Storybook</a>
        </li>
      </ul>

      <sbb-title level="2" visual-level="5">Notice</sbb-title>
      <!-- eslint-disable-next-line max-len -->
      <p>
        We intend to build the Lyne documentation platform based on the
        <a
          href="https://github.com/lyne-design-system/lyne-documentation/blob/master/content/information-architecture.md"
          >here documented Information Architecture(IA)</a
        >
        and will enhance the documentation platform once we have the content available. The state of
        the Lyne documentation platform is, and will always be — like the entire system,
        <em>work in progress (WIP)</em> — inspired by
        <a href="https://carbondesignsystem.com">Carbon</a>, <a href="https://duetds.com">Duet</a>,
        <a href="https://boltdesignsystem.com">Bolt</a>,
        <a href="https://spectrum.adobe.com">Spectrum</a>. The documentation platform uses some of
        their content until Lyne will be mature enough/we are enough contributors from different
        disciplines to provide a more holistic perspective on the topic and the necessary resources
        get provided to document them accordingly.
      </p>
      <p>
        Lyne Design System is <span class="tag-mark">🧪 experimental</span> at the moment — with
        enthusiasm. Do not use the project until it has left infancy.
      </p>
    </div>
  </footer>
</template>

<script>
import globalConfig from '../../global.config';

const lyneComponentsVersion = require('@sbb-esta/lyne-components/package.json').version;
const lyneDesignTokensVersion = require('@sbb-esta/lyne-design-tokens/package.json').version;
const sbbIconsVersion = require('@sbb-esta/icons/package.json').version;
const sbbPictogramsVersion = require('@sbb-esta/pictograms/package.json').version;
const documentationPackageJson = require('../../package.json');

const lyneDocumentationVersion = '0.0.0';

export default {
  data() {
    const dataExport = {
      storybookUrl: globalConfig.storybookBaseUrl,
      links: {
        components: {
          link: 'https://github.com/lyne-design-system/lyne-components',
          title: 'lyne-components',
          version: lyneComponentsVersion,
        },
        tokens: {
          link: 'https://github.com/lyne-design-system/lyne-design-tokens',
          title: 'lyne-design-tokens',
          version: lyneDesignTokensVersion,
        },
        documentation: {
          link: 'https://github.com/lyne-design-system/lyne-documentation',
          title: 'lyne-documentation',
          version: lyneDocumentationVersion,
        },
        icons: {
          link: 'https://github.com/sbb-design-systems/sbb-icons',
          title: 'sbb-icons',
          version: sbbIconsVersion,
        },
        pictograms: {
          link: 'https://github.com/sbb-design-systems/sbb-pictograms',
          title: 'sbb-pictograms',
          version: sbbPictogramsVersion,
        },
      },
    };

    return dataExport;
  },
  mounted() {
    fetch('/version.txt').then((versionData) => {
      if (!versionData.ok) {
        throw new Error('Version file not found');
      }

      versionData.text().then((versionNumber) => {
        let _versionNumber = versionNumber;

        if (versionNumber.trim() === '0.0.0') {
          _versionNumber = documentationPackageJson.version;
        }

        this.links.documentation.version = _versionNumber;
      });
    });
  },
  name: 'Footer',
};
</script>

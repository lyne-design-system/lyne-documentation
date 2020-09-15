<template>

  <footer>
    Lyne Design System:
    <ul>
      <li>
        <a
          href="https://github.com/lyne-design-system/lyne-design-tokens"
          target="_blank"
          rel="noopener"
        >lyne-design-tokens {{$data.versions.lyneDesignTokens}}</a>
      </li>

      <li>
        <a
          href="https://github.com/lyne-design-system/lyne-components"
          target="_blank"
          rel="noopener"
        >lyne-components {{$data.versions.lyneComponents}}</a>
      </li>

      <li>
        <a
          href="https://github.com/lyne-design-system/lyne-documentation"
          target="_blank"
          rel="noopener"
        >lyne-documentation {{$data.versions.lyneDocumentation}}</a>
      </li>

      <li>
        <a
          href="https://github.com/lyne-design-system/lyne-icons"
          target="_blank"
          rel="noopener"
        >lyne-icons {{$data.versions.lyneIcons}}</a>
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
      versions: {
        lyneComponents: `v${lyneComponentsVersion}`,
        lyneDesignTokens: `v${lyneDesignTokensVersion}`,
        lyneDocumentation: null,
        lyneIcons: lyneIconsVersion
      }
    };

    return dataExport;
  },
  async mounted () {
    try {
      const apiResult = await fetch(globalConfig.githubApiLatestRelease);
      const data = await apiResult.json();

      this.versions.lyneDocumentation = data['tag_name'];
    } catch (err) {
      console.log('There was an error fetching latest lyne-documentation release from github api');
      console.log(err);
    }
  },
  name: 'Footer'
};

</script>

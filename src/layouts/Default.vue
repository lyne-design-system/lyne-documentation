<template>
  <div>
    <header>
      <nav>
        <g-link to="/">Home</g-link>
        <g-link to="/playground">Playground</g-link>
      </nav>
    </header>
    <transition name="fade" appear>
      <main>
        <slot/>
      </main>
  </transition>
  <footer>
    <hr>
    Lyne Design System:
    <ul>
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
    </ul>
  </footer>
  </div>
</template>

<script>
const lyneComponentsVersion = require('lyne-test/package.json').version;
const globalConfig = require('../../global.config');

export default {
  data() {
    return {
      versions: {
        lyneComponents: `v${lyneComponentsVersion}`,
        lyneDocumentation: null
      }
    };
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
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-active {
  transition: opacity 300ms;
}

.fade-enter {
  opacity: 0;
}
</style>

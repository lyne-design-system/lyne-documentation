<template>
  <div>
    <header>

      <nav class="nav">

        <g-link
          class="nav-link"
          :to="$tp('/')"
        >Home</g-link>

        <g-link
          class="nav-link"
          :to="$tp('/lyne-components/')"
        >Components</g-link>

        <g-link
          class="nav-link"
          :to="$tp(`/${$t('paths.playground')}/`)"
        >Playground</g-link>

        <g-link
          class="nav-link"
          :to="$tp('/deployments/')"
        >Deployments</g-link>

        <LocaleSwitcher class="nav-link nav-link__lang-switch"/>

      </nav>

    </header>
    <transition name="fade" appear>
      <main>
        <slot/>
      </main>
    </transition>
    <footer class='footer'>
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
import LocaleSwitcher from '../components/LocaleSwitcher.vue';

const lyneComponentsVersion = require('lyne-test/package.json').version;
const globalConfig = require('../../global.config');

export default {
  components: {
    LocaleSwitcher
  },
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

.nav {
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  // overflow: auto;
}

.nav-link {
  display: block;
  padding: 1rem;
  // float: left;
}

.nav-link__lang-switch {
  height: 2rem;
  margin: 0 1rem 0 auto;
}

.nav-link.active--exact {
  color: rgb(0, 0, 0);
  pointer-events: none;
  text-decoration: none;
}

.footer {
  background-color: rgba(0, 0, 0, 0.2);
  margin-top: 2rem;
  padding: 1rem;
}
</style>

<template>
  <div>
    <header>

      <nav class="nav">

        <g-link
          v-for="(link) in $data.navLinks"
          class="nav-link"
          :to="$tp(link.path)"
          :key="link.path"
        >{{link.title}}</g-link>

        <LocaleSwitcher
          class="nav-link nav-link__lang-switch"
          @clicked="onClickChild"
        />

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
const paths = require('../i18n/paths');

const getNavLinks = (locale) => {
  const langObjects = paths[locale];
  const {
    components,
    deployments,
    home,
    playground
  } = langObjects;

  return [
    home,
    components,
    deployments,
    playground
  ];
};

export default {
  components: {
    LocaleSwitcher
  },
  data: (comp) => {
    const locale = comp._i18n.locale.toString();

    return {
      navLinks: getNavLinks(locale),
      versions: {
        lyneComponents: `v${lyneComponentsVersion}`,
        lyneDocumentation: null
      }
    };
  },
  methods: {
    onClickChild (locale) {
      this.navLinks = getNavLinks(locale);
    }
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
}

.nav-link {
  display: block;
  padding: 1rem;
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

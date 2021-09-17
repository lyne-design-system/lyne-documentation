<template>
  <div>

    <Header />

    <div class="columns is-desktop">
      <Navigation class="column is-3-desktop" />

      <div class="column is-9-desktop">
        <transition name="fade" appear>
          <main>
            <slot/>
          </main>
        </transition>
      </div>

    </div>

    <Footer />

  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import Navigation from '../components/Navigation/Navigation.vue';

export default {
  components: {
    Footer,
    Header,
    Navigation
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

.columns {
  margin: 0;
}

.column.is-9-desktop {
  max-width: 900px;
}

</style>

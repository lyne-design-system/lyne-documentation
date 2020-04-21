<template>
  <div>
    <header>
      <nav>
        <g-link to="/">Home</g-link>
      </nav>
    </header>
    <transition name="fade" appear>
      <main>
        <slot/>
      </main>
  </transition>
  </div>
</template>

<style lang="scss" scoped>
.fade-enter-active {
  transition: opacity 300ms;
}

.fade-enter {
  opacity: 0;
}
</style>

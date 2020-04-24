<template>

  <select
    v-model="currentLocale"
    @change="localeChanged"
  >

    <option
      v-for="locale in availableLocales"
      :key="locale"
      :value="locale"
    >{{ locale }}</option>

  </select>

</template>

<script>

export default {
  data: (comp) => ({
    availableLocales: comp._i18n.availableLocales,
    currentLocale: comp._i18n.locale.toString()
  }),
  methods: {
    localeChanged () {
      this.$router.push({
        path: this.$tp(this.$route.path, this.currentLocale, true)
      });
    }
  },
  name: 'LocaleSwitcher'
};

</script>

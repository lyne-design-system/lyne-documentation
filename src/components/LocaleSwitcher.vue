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
const paths = require('../i18n/paths');

export default {
  data: (comp) => ({
    availableLocales: comp._i18n.availableLocales,
    currentLocale: comp._i18n.locale.toString(),
    pathObject: paths[comp._i18n.locale.toString()]
  }),
  methods: {
    localeChanged () {
      const currentPath = this.$route.path
        .substring(this.currentLocale.length + 2, this.$route.path.length);
      const cleanCurrentPath = currentPath.replace('/', '');

      // find path object key which has clean currentPath as path
      let keyFound = false;

      Object.keys(this.pathObject)
        .forEach((pathObjectKey) => {
          const pathObject = this.pathObject[pathObjectKey];

          if (pathObject.path === cleanCurrentPath) {
            keyFound = pathObjectKey;
          }
        });

      let desiredPath;

      if (keyFound) {
        const pathObjects = paths[this.currentLocale];

        desiredPath = `/${this.currentLocale}/${pathObjects[keyFound].path}`;
        this.pathObject = pathObjects;

      } else {
        desiredPath = this.$tp(this.$route.path, this.currentLocale, true);
      }

      this.$router.push({
        path: desiredPath
      });

      this.$emit('clicked', this.currentLocale);
    }
  },
  name: 'LocaleSwitcher'
};

</script>

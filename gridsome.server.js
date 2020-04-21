const globalConfig = require('./global.config');

module.exports = function (api) {

  // create a page for each lyne-component
  api.createPages(async ({ graphql, createPage }) => {
    const {
      data
    } = await graphql(`
      {
        ${globalConfig.graphqlDatoFieldName} {
          allComponents {
            id
            componentName
          }
        }
      }
    `);

    data[globalConfig.graphqlDatoFieldName].allComponents.forEach((comp) => createPage({
      path: `/components/${comp.componentName}`,
      component: './src/templates/LyneComponent.vue',
      context: {
        compId: comp.id,
        componentDistPath: `./${globalConfig.lyneComponentsDocumentationPath}/components/${comp.componentName}`
      }
    }));
  })

}

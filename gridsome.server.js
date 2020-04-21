module.exports = function (api) {

  // create a page for each lyne-component
  api.createPages(async ({ graphql, createPage }) => {
    const {
      data: {
        lyne: {
          allComponents
        }
      }
    } = await graphql(`
      {
        lyne {
          allComponents {
            id
            componentName
          }
        }
      }
    `);

    allComponents.forEach((comp) => createPage({
      path: `/components/${comp.componentName}`,
      component: './src/templates/LyneComponent.vue',
      context: {
        compId: comp.id,
        componentDistPath: `./node_modules/lyne-test/dist/documentation/components/${comp.componentName}`
      }
    }));
  })

}

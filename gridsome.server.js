module.exports = function (api) {
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
        compId: comp.id
      }
    }));
  });
}

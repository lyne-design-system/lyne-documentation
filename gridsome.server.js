module.exports = function (api) {
  api.createPages(async ({ graphql, createPage }) => {
    const {
      data: {
        allDatoCmsComponent
      }
    } = await graphql(`
      {
        allDatoCmsComponent {
          edges {
            node {
              id
              componentName
            }
          }
        }
      }
    `);

    allDatoCmsComponent.edges.forEach(({node}) => createPage({
      path: `/components/${node.componentName}`,
      component: './src/templates/LyneComponent.vue',
      context: {

        // TODO: for `datoCmsComponent` in query, type ID is needed. for
        // filtering `allDatoCmsComponentVariant` in query, type Date is needed.
        // This does not make sense... ?
        compIdDate: node.id,
        compIdString: node.id
      }
    }));
  });
}

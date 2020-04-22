const globalConfig = require('./global.config');

function mainFunction(api) {

  // create a page for each lyne-component
  api.createPages(async ({graphql, createPage}) => {
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

    data[globalConfig.graphqlDatoFieldName]
      .allComponents
      .forEach((comp) => createPage({
        component: './src/templates/LyneComponent.vue',
        context: {
          compId: comp.id,
          componentDistPath: `./${globalConfig.lyneComponentsDocumentationPath}/components/${comp.componentName}`
        },
        path: `/components/${comp.componentName}`
      }));
  });

}

module.exports = mainFunction;

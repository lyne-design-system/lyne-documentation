const axios = require('axios');
const globalConfig = require('./global.config');
const paths = require('./src/i18n/paths');

function mainFunction(api) {

  api.createPages(async ({graphql, createPage}) => {

    // get lyne-components from graph-ql
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

    // create a page for each lyne-component
    data[globalConfig.graphqlDatoFieldName]
      .allComponents
      .forEach((comp) => createPage({
        component: './src/templates/Component.vue',
        context: {
          compId: comp.id,
          componentDistPath: `./${globalConfig.lyneComponentsDocumentationPath}/components/${comp.componentName}`
        },
        path: `/components/${comp.componentName}`
      }));

    // create a page for each template and each language
    const langKeys = Object.keys(paths);

    langKeys.forEach((langKey) => {
      const langObject = paths[langKey];
      const pathKeys = Object.keys(langObject);

      pathKeys.forEach((pathKey) => {
        const pathObject = langObject[pathKey];

        return createPage({
          component: `./src/templates/${pathObject.template}.vue`,
          path: `/${pathObject.path}`
        });
      });
    });
  });

  api.loadSource(async (actions) => {

    // get prod/preview deployments json info
    const deployments = await axios.get(globalConfig.deploymentsJsonUrl);

    // add deployments collection to graphql
    const deploymentsCollection = actions.addCollection({
      typeName: 'Deployments'
    });

    deploymentsCollection.addNode(deployments.data);

  });

}

module.exports = mainFunction;

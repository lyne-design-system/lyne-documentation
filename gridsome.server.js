const axios = require('axios');
const componentsData = require('lyne-test/dist/collection/storybundle/components.json');
const globalConfig = require('./global.config');

const mainFunction = (api) => {

  api.createPages(({
    createPage
  }) => {

    componentsData.components.forEach((component) => {
      createPage({
        component: './src/templates/Component.vue',
        context: {
          compId: component,
          componentDistPath: `./${globalConfig.lyneComponentsDocumentationPath}/components/${component}`
        },
        path: `/components/${component}`
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

};

module.exports = mainFunction;

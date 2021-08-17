const axios = require('axios');
const componentsData = require('./src/components');
const globalConfig = require('./global.config');

const mainFunction = (api) => {

  api.createPages(({
    createPage
  }) => {

    componentsData.forEach((component) => {
      createPage({
        component: './src/templates/Component.vue',
        context: {
          compId: component.name,
          componentDistPath: `./${globalConfig.lyneComponentsDocumentationPath}/components/${component.name}`
        },
        path: `/components/${component.name}`
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

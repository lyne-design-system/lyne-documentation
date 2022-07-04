const axios = require('axios');
const componentsData = require('@sbb-esta/lyne-components/dist/collection/storybundle/components.json');
const globalConfig = require('./global.config');

const mainFunction = (api) => {
  api.createPages(({ createPage }) => {
    componentsData.components.forEach((component) => {
      createPage({
        component: './src/templates/Component.vue',
        context: {
          compId: component,
          componentDistPath: `./${globalConfig.lyneComponentsDocumentationPath}/components/${component}`,
        },
        path: `/components/${component}`,
      });
    });
  });

  api.loadSource(async (actions) => {
    // get prod/preview deployments json info
    const deployments = await axios.get(globalConfig.deploymentsJsonUrl);

    // add deployments collection to graphql
    const deploymentsCollection = actions.addCollection({
      typeName: 'Deployments',
    });

    /**
     * FIXME if the value of the production / preview keys is an empty array,
     *  the key is removed and the page-query on the Deployments.vue file fails.
     *  To avoid this, the empty array is reassigned using a default object
     *  and a v-if / v-else is added on that page.
     */
    Object.entries(deployments.data).forEach(([key, value]) => {
      if (value && value.length === 0) {
        deployments.data[key] = [
          {
            date: '',
            tag: '',
            url: '',
          },
        ];
      }
    });

    deploymentsCollection.addNode(deployments.data);
  });
};

module.exports = mainFunction;

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
};

module.exports = mainFunction;

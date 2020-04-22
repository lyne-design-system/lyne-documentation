const path = require('path');
const globalConfig = require('./global.config');

// add global scss file using webpack style-resources-loader
function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/global.scss')
      ]
    });
}

module.exports = {
  chainWebpack(config) {
    // Load variables for all vue-files
    const types = [
      'vue-modules',
      'vue',
      'normal-modules',
      'normal'
    ];

    // or if you use scss
    types.forEach((type) => {
      addStyleResource(config.module.rule('scss')
        .oneOf(type));
    });
  },
  plugins: [

    // source-graphql plugin for gridsome
    {
      options: {
        fieldName: globalConfig.graphqlDatoFieldName,
        headers: {
          Authorization: `Bearer ${process.env.DATO_API_TOKEN}`
        },
        typeName: globalConfig.graphqlDatoTypeName,
        url: globalConfig.graphqlDatoUrl
      },
      use: '@gridsome/source-graphql'
    },

    // filesystem plugin for gridsome
    {
      options: {
        path: `./${globalConfig.lyneComponentsDocumentationPath}/**/*.md`,
        typeName: globalConfig.graphqlComponentsReadmeTypeName
      },
      use: '@gridsome/source-filesystem'
    }
  ],
  siteDescription: 'Documentation for Lyne Design System',
  siteName: 'Lyne Design System',
  siteUrl: '',
  transformers: {
    remark: {
      plugins: [
        [
          'gridsome-plugin-remark-shiki',
          {
            skipInline: false
          }
        ]
      ]
    }
  }
};

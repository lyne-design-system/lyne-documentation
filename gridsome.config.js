const path = require('path');
const globalConfig = require('./global.config');

// style-ressource-loader
const addStyleResource = (rule) => {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path.resolve(__dirname, './src/styles/styles.scss')]
    });
};

module.exports = {
  chainWebpack(config) {

    const svgRule = config.module.rule('svg');

    svgRule
      .uses
      .clear();

    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');

    // style-ressource-loader for all modules
    const types = [
      'vue-modules',
      'vue',
      'normal-modules',
      'normal'
    ];

    types.forEach((type) => {
      addStyleResource(config.module.rule('scss')
        .oneOf(type));
    });
  },
  plugins: [

    /**
     * filesystem plugin for content markdown.
     * will use template {typeName}.vue by default
     */
    {
      options: {
        baseDir: './content',
        path: '**/*.md',
        typeName: globalConfig.lyneDocumentationContentTypeName
      },
      use: '@gridsome/source-filesystem'
    },

    // filesystem plugin for components markdown
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
          'gridsome-plugin-remark-mermaid',
          {
            theme: 'default'
          }
        ],
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

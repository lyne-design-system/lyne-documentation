const globalConfig = require('./global.config');

module.exports = {
  chainWebpack(config) {

    const svgRule = config.module.rule('svg');

    svgRule
      .uses
      .clear();

    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
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

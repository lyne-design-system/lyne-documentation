const messages = require('./src/i18n');
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
    },

    // i18n
    {
      options: {
        defaultLocale: 'en',
        enablePathRewrite: false,
        fallbackLocale: 'en',
        locales: [
          'de',
          'en'
        ],
        messages,
        pathAliases: {
          de: 'de',
          en: 'en'
        }
      },
      use: 'gridsome-plugin-i18n'
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

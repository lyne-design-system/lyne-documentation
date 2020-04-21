const globalConfig = require('./global.config');

module.exports = {
  plugins: [
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
    remark: {}
  }
};

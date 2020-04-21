const globalConfig = require('./global.config');

module.exports = {
  siteName: 'Lyne Design System',
  siteDescription: 'Documentation for Lyne Design System',
  siteUrl: '',
  plugins: [
    {
      use: '@gridsome/source-graphql',
      options: {
        url: globalConfig.graphqlDatoUrl,
        fieldName: globalConfig.graphqlDatoFieldName,
        typeName: globalConfig.graphqlDatoTypeName,
        headers: {
          Authorization: `Bearer ${process.env.DATO_API_TOKEN}`,
        },
      },
    },
    {
     use: '@gridsome/source-filesystem',
     options: {
       path: `./${globalConfig.lyneComponentsDocumentationPath}/**/*.md`,
       typeName: globalConfig.graphqlComponentsReadmeTypeName
     }
    }
  ],
  transformers: {
    remark: {}
  }
}

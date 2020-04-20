module.exports = {
  siteName: 'Lyne Design System',
  siteDescription: 'Documentation for Lyne Design System',
  siteUrl: '',
  plugins: [
    {
      use: '@gridsome/source-graphql',
      options: {
        url: 'https://graphql.datocms.com',
        fieldName: 'lyne',
        typeName: 'lyneTypes',

        headers: {
          Authorization: `Bearer ${process.env.DATO_API_TOKEN}`,
        },
      },
    }
  ]
}

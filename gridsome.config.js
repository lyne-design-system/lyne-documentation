module.exports = {
  siteName: 'Lyne Design System',
  siteDescription: 'Documentation for Lyne Design System',
  siteUrl: '',
  plugins: [
    {
      use: '@gridsome/source-datocms',
      options: {
        apiToken: process.env['DATO_API_TOKEN'],
        previewMode: true,
        apiUrl: 'https://site-api.datocms.com',
        typeName: 'DatoCms'
      }
    }
  ]
}

module.exports = {
  pathPrefix: `/my-web-portfolio`,
  plugins: [
    // `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/client-screens`,
        name: 'client screenshots'
      },
    }
  ]
}
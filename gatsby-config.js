module.exports = {
  pathPrefix: `/my-web-portfolio`,
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    }
  ],
}
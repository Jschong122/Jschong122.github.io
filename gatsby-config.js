/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "",
  siteMetadata: {
    title: `personal portfolio`,

    siteUrl: `https://jschong122.github.io/`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Work Sans:100,200,300,400, 500, 900`,
          `Open+Sans:300,400,600,700`,
        ],
        display: "swap",
      },
    },
  ],
};

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "",
  siteMetadata: {
    title: `personal portfolio`,

    siteUrl: `https://www.yourdomain.tld`,
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
          `"Work Sans\:100,900`,
          `Open+Sans\:300,400,600,700`, // Example of another font
        ],
        display: "swap",
      },
    },
  ],
};

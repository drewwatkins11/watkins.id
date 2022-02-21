/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        /** @property {boolean} [resetCSS=true] **/
        resetCSS: true,
        /** @property {boolean} [isUsingColorMode=true] **/
        isUsingColorMode: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          // `crimson pro`,
          "open sans",
        ],
        display: "swap",
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};

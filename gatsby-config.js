module.exports = {
  siteMetadata: {
    title: `AnimalVet `,
    description: `Gabinet Weterynaryjny - AnimalVet. Opieka, leczenie, porady.`,
    author: `MarcinL`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AnimalVet`,
        short_name: `AV`,
        start_url: `/`,
        background_color: `#CF315E`,
        theme_color: `#CF315E`,
        display: `minimal-ui`,
        icon: `src/images/animal_logo.png`, // This path is relative to the root of the site.
      },
    },
    //{
    //  resolve: `gatsby-plugin-google-analytics`,
    //  options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
     //   trackingId: "UA-91684421-2",
     // },
    //},
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

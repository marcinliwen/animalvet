require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

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
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-pages`,
        name: `markdown-pages`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth:1200,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        // useAutoGen: required 'true' to use autogen
        useAutoGen: true,
        // autoGenHomeLabel: optional 'Home' is default
        autoGenHomeLabel: `Home`,
        // exlude: optional, include this array to overwrite paths you don't want to
        // generate breadcrumbs for.
        exclude: [
          `/dev-404-page/`,
          `/404/`,
          `/404.html`,
          `/offline-plugin-app-shell-fallback/`,
        ],
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: process.env.MAILCHIMP_ENDPOINT, 
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AnimalVet`,
        short_name: `AV`,
        start_url: `/`,
        background_color: `#8cd4ff`,
        theme_color: `#8cd4ff`,
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

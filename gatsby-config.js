require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `AnimalVet `,
    description: `Gabinet Weterynaryjny - AnimalVet. Opieka, leczenie, porady.`,
    author: `MarcinL`,
    phone_number: "+48506109445",
    phone_display: "+48 506 109 445",
    whatsup_number: "48506109445",
    address: "Zasieki 4B",
    post_code: "68-343 Zasieki",
    mail: "animalvet@gmail.com",
    open_day:"PN - PT",
    open_hours: "10:00 - 16:00",
    menuLinks: [
      {
        name: 'Usługi',
        link:'/uslugi',
        submenuLink:[
          {
            name: 'Chirurgia',
            link: '/uslugi/chirurgia'
          },
          {
            name: 'Profilaktyka',
            link: '/uslugi/profilaktyka'
          },
          {
            name: 'Diagnostyka',
            link: '/uslugi/diagnostyka'
          },
          {
            name: 'Badania kontrolne',
            link: '/uslugi/badania_kontrolne'
          },
          {
            name: 'Szczepienia',
            link: '/uslugi/szczepienia'
          }
        ]
      },
      {
        name: 'O nas',
        link: '/onas'
      },
      {
        name: 'Nasi pacjenci',
        link: '/pacjenci'
      },
      {
        name: 'Kontakt',
        link: '/kontakt'
      }
    ]
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
        background_color: `#8EE7FF`,
        theme_color: `#8EE7FF`,
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

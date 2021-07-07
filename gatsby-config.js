module.exports = {
  pathPrefix: "fs-monthly-meeting-2021-07",
  siteMetadata: {
    siteTitle: `FS 本社定例会案内ページ`,
    defaultTitle: `2021年度7月度 本社定例会の案内ページ`,
    siteTitleShort: `定例会案内ページ`,
    siteDescription: `2021年度7月9日に開催する本社定例会の案内ページです`,
    siteUrl: `https://fs5013-furi-sutao.github.io/fs-monthly-meeting-2021-07/`,
    siteAuthor: `@rocketseat`,
    siteImage: `/banner.svg`,
    siteLanguage: `ja`,
    themeColor: `#007fff`,
    basePath: `/`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        repositoryUrl: `https://fs5013-furi-sutao.github.io/fs-monthly-meeting-2021-07`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `YOUR_ANALYTICS_ID`,
    //   },
    // },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://fs5013-furi-sutao.github.io/fs-monthly-meeting-2021-07/`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: '@mkitio/gatsby-theme-password-protect',
      options: {
        password: 'rotten7apple', // delete or `undefined` to disable password protection
        partialMatching: true,
        pagePaths: ['/fs-monthly-meeting-2021-07']
      }
    }
  ],
};

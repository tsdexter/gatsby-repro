module.exports = {
  siteMetadata: {
    title: ``,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://defaultwptest.wpengine.com/graphql",
        html: {
          createStaticFiles: false,
          useGatsbyImage: false,
        },
        schema: {
          timeout: 1000000,
          perPage: 50,
          requestConcurrency: 20,
        },
        type: {
          // __all: {
          //   limit: 10,
          // },
          MediaItem: {
            createFileNodes: false,
            localFile: {
              maxFileSizeBytes: 1,
            },
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-fastify`,
      /* Default option value shown */
      options: {
        compression: true, //When set to false gzip/bz compression assets is disabled.
      },
    },
  ],
};

// gatsby-node.js
const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const pageTemplate = path.resolve(`src/templates/page.js`);
  const { createPage, createRedirect } = actions;
  // createRedirect({
  //   fromPath: `/*`,
  //   toPath: `https://georgiandevenv.wpengine.com/*`,
  //   statusCode: 200,
  // });
  createPage({
    path: "/node-ssg",
    component: pageTemplate,
    defer: false,
    // In your blog post template's graphql query, you can use pagePath
    // as a GraphQL variable to query for data from the markdown file.
    context: {
      pagePath: `/node-ssg`,
      title: `Node SSG`,
    },
  });
  createPage({
    path: "/node-dsg",
    component: pageTemplate,
    defer: true,
    // In your blog post template's graphql query, you can use pagePath
    // as a GraphQL variable to query for data from the markdown file.
    context: {
      pagePath: `/node-dsg`,
      title: "Node DSG",
    },
  });
  // add woordpress pages
  const allPages = await graphql(`
    {
      allWpPage(sort: { fields: [date] }) {
        nodes {
          id
          databaseId
          title
          content
          slug
          link
          uri
        }
      }
    }
  `);
  allPages.data.allWpPage.nodes.forEach((node) => {
    createPage({
      path: node.uri,
      component: path.resolve(`./src/templates/wp-page.js`),
      context: {
        data: node,
      },
    });
  });
};

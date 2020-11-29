/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')


exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
  
  
    const result = await graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {fields: {collection: {eq: "markdown-pages"}}}
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                slug
                templateKey
              }
            }
          }
        }
      }
    `)
  
    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
  
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: path.resolve(
            `src/templates/${String(node.frontmatter.templateKey)}.js`
          ),
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      })
    })
  }

  exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `MarkdownRemark`) {
      const parent = getNode(node.parent);
      let collection = parent.sourceInstanceName;
      createNodeField({
        node,
        name: 'collection',
        value: collection,
      });
    }
  };
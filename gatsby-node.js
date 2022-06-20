exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allNotion {
        edges {
          node {
            id
            title
            createdAt
          }
        }
      }
    }
  `);

  data.allNotion.edges.forEach((edge) => {
    const title = edge.node.title
      .toLowerCase()
      .trim()
      .replace(/\s/g, "-")
      .replace(/[\!\?\“\"\”\']/g, "");
    const id = edge.node.id;
    console.log("creating title", title);

    actions.createPage({
      path: `/garden/${title}`,
      component: require.resolve(`./src/templates/post.tsx`),
      context: { postId: id },
    });
  });
};

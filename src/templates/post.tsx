import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts/Layout";
import { Stack, Heading, Container } from "@chakra-ui/react";
import renderAst from "../helpers/renderAst";

const BlogPostTemplate = (data) => {
  console.log("blog post", data);

  const { id, title, childrenMarkdownRemark } = data.data.notion;
  console.log(title, childrenMarkdownRemark);
  const htmlAst = childrenMarkdownRemark[0].htmlAst;

  return (
    <Layout>
      <Stack>
        <Heading as="h2"> {title} </Heading>
        {/* <Heading as="h3">{frontmatter.Polish.name}</Heading> */}
        <Container>{renderAst(htmlAst)}</Container>
      </Stack>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query ($postId: String) {
    notion(id: { eq: $postId }) {
      id
      title
      childrenMarkdownRemark {
        htmlAst
      }
    }
  }
`;

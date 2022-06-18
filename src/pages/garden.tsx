import React from "react";
import { graphql } from "gatsby";
import { Flex, Heading, Container, Stack, Text } from "@chakra-ui/react";
import rehypeReact from "rehype-react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    ...ChakraUIRenderer(),
  },
}).Compiler;

const md = (data) => {
  const { frontmatter, htmlAst } = data.edge.node;
  return (
    <Stack>
      <Heading as="h2"> {frontmatter.title} </Heading>
      <Heading as="h3">{frontmatter.Polish.name}</Heading>
      <Container>{renderAst(htmlAst)}</Container>
    </Stack>
  );
};

const Garden = ({ data }) => {
  return (
    <Stack>
      <Heading as="h1">Hello!</Heading>
      <Stack>{data.allMarkdownRemark.edges.map((edge) => md({ edge }))}</Stack>
    </Stack>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { Published: { eq: true } } }) {
      edges {
        node {
          frontmatter {
            title
            Polish {
              name
            }
            Subheading
            Tags {
              name
            }
            Type {
              name
            }
          }
          htmlAst
        }
      }
    }
  }
`;

export default Garden;

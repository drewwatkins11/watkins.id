import React from "react";
import { graphql, Link } from "gatsby";
import { Flex, Heading, Container, Stack, Text } from "@chakra-ui/react";
import renderAst from "../helpers/renderAst";

const Garden = ({ data }) => {
  return (
    <Stack>
      <Heading as="h1">Hello!</Heading>
      <Stack>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <Link
              to={edge.node.frontmatter.title.toLowerCase().replace(/\s/g, "-")}
            >
              {edge.node.frontmatter.title}
            </Link>
          );
        })}
      </Stack>
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
          }
        }
      }
    }
  }
`;

export default Garden;

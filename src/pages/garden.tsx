import React from "react";
import { graphql, Link } from "gatsby";
import {
  Heading,
  Container,
  Stack,
  Text,
  Collapse,
  Button,
} from "@chakra-ui/react";
import Layout from "../layouts/Layout";
import { useState } from "react";
import { useEffect } from "react";

const Garden = ({ data }) => {
  const [showDescription, setShowDescription] = useState<boolean>();

  useEffect(() => {
    if (localStorage.getItem("showGardenDescription")) {
      setShowDescription(
        localStorage.getItem("showGardenDescription") === "true"
      );
    } else setShowDescription(true);
  }, []);

  const handleDescriptionClick = () => {
    localStorage.setItem(
      "showGardenDescription",
      showDescription ? "false" : "true"
    );
    setShowDescription(!showDescription);
  };

  return (
    <Layout>
      <Stack>
        <Heading as="h1">Digital Garden</Heading>
        <Button variant="link" onClick={handleDescriptionClick}>
          What is a digital garden?
        </Button>
        <Collapse in={showDescription}>
          <Container>
            <Stack>
              <Text>
                My personal site is a digital garden, which is to say that it is
                unpolished, everchanging, and, sometimes, unfinished.
              </Text>
              <Text>
                Just as physical gardening involves nurturing the soil, seeds,
                and ecosystom over a long period of time, digital gardening
                starts with small, unfinished pieces while building them up to
                larger, more edited pieces; typically in public.
              </Text>
              <Text>
                Some of the posts in this garden are longer works from my
                professional career, while others are as simple as a fleeting
                memory that I want to remember and share. It's still early in
                the days of my garden, so I'll be adding content over the coming
                months, both from my past work and net-new content.
              </Text>
            </Stack>
          </Container>
        </Collapse>
        <Stack>
          {data.allMarkdownRemark.edges.map((edge) => (
            <Link
              to={edge.node.frontmatter.title.toLowerCase().replace(/\s/g, "-")}
            >
              {edge.node.frontmatter.title}
            </Link>
          ))}
        </Stack>
      </Stack>
    </Layout>
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

import React from "react";
import { graphql, Link } from "gatsby";
import {
  Heading,
  Container,
  Stack,
  Text,
  Collapse,
  Button,
  Flex,
  Divider,
  HStack,
} from "@chakra-ui/react";
import Layout from "../layouts/Layout";
import { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { fontSizeArray } from "../config/theme/components/Heading";

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
      <Stack spacing="2rem">
        <Stack>
          <Heading as="h1" fontSize={fontSizeArray}>
            Welcome to my <i>(digital)</i> garden{" "}
            {/* <FontAwesomeIcon icon={solid("hand-wave")} /> */}
          </Heading>
          <Heading as="h2" fontWeight={200} fontSize="3xl">
            A loosely-curated collection of essays, musings, and memories.
          </Heading>
          <Stack
            justify={"flex-start"}
            p={showDescription && "sm"}
            bgColor={showDescription && "white"}
            rounded="3px"
            border={showDescription && ".25px solid"}
            borderColor={showDescription && "earth.300"}
            shadow={showDescription && "sm"}
            transition="200ms ease-in"
          >
            <Flex>
              <Button
                variant="link"
                onClick={handleDescriptionClick}
                width="auto"
                color="salsa"
              >
                What is digital gardening?
              </Button>
            </Flex>
            <Collapse in={showDescription}>
              <Stack>
                <Text fontSize="sm">
                  My personal site is a digital garden, which is to say that it
                  is unpolished, everchanging, and, sometimes, unfinished.
                </Text>
                <Text fontSize="sm">
                  Just as physical gardening involves nurturing the soil, seeds,
                  and ecosystom over a long period of time, digital gardening
                  starts with small, unfinished pieces while building them up to
                  larger, more edited pieces; typically in public.
                </Text>
                <Text fontSize="sm">
                  Some of the posts in this garden are longer works from my
                  professional career, while others are as simple as a fleeting
                  memory that I want to remember and share. It's still early in
                  the days of my garden, so I'll be adding content over the
                  coming months, both from my past work and net-new content.
                </Text>
                <Flex>
                  <Button
                    variant="link"
                    onClick={handleDescriptionClick}
                    width="auto"
                    minW="20px"
                    color="salsa"
                    fontSize="xs"
                    p="0"
                    textDecor="underline"
                  >
                    hide this
                  </Button>
                </Flex>
              </Stack>
            </Collapse>
          </Stack>
        </Stack>
        <Divider />
        <Stack spacing="lg">
          {data.allNotion.edges.map((edge) => (
            <Flex direction="row" justify="space-between">
              <Stack spacing=".25rem">
                <Heading as="h3" fontSize="lg" color="blackChocolate">
                  <Link
                    to={edge.node.title
                      .toLowerCase()
                      .replace(/\s/g, "-")
                      .replace(/[\!\?\“\"\”\']/g, "")}
                  >
                    {edge.node.title}
                  </Link>
                </Heading>
                <HStack align="flex-start">
                  <Text fontSize="sm" fontWeight={700} whiteSpace="nowrap">
                    {edge.node.properties.type?.value.name}
                  </Text>
                  <Text fontSize="xs">
                    <FontAwesomeIcon icon={solid("grip-lines-vertical")} />
                  </Text>
                  <Text fontSize="sm">
                    {edge.node.properties.polish?.value.name}
                  </Text>
                  <Text fontSize="xs">
                    <FontAwesomeIcon icon={solid("grip-lines-vertical")} />
                  </Text>
                  <Flex wrap="wrap" gap="xs" rowGap=".5rem">
                    {edge.node.properties.tags?.value.map((tag) => {
                      return (
                        <Text
                          fontSize="xs"
                          px="xs"
                          rounded="md"
                          py="2px"
                          bgColor={"blueMunsell"}
                          color="white"
                        >
                          {tag.name}
                        </Text>
                      );
                    })}
                  </Flex>
                </HStack>
              </Stack>
              <Stack align="flex-end" spacing=".2rem">
                <Text fontSize="xs" whiteSpace="nowrap">
                  <Text as="span" fontWeight={600}>
                    Started:
                  </Text>{" "}
                  {new Date(
                    edge.node.properties.originalCreationDate?.value?.start ||
                      edge.node.createdAt
                  ).toDateString()}
                </Text>
                <Text fontSize="xs" whiteSpace="nowrap">
                  <Text as="span" fontWeight={600}>
                    Last updated:
                  </Text>{" "}
                  {new Date(edge.node.updatedAt).toDateString()}
                </Text>
              </Stack>
            </Flex>
          ))}
        </Stack>
      </Stack>
    </Layout>
  );
};

export const query = graphql`
  query {
    allNotion(
      filter: { properties: { published: { value: { eq: true } } } }
      sort: { updatedAt: DESC }
    ) {
      edges {
        node {
          createdAt
          updatedAt
          title
          properties {
            tags {
              value {
                name
              }
            }
            polish {
              value {
                name
              }
            }
            originalCreationDate {
              value {
                start
              }
            }
            type {
              value {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export default Garden;

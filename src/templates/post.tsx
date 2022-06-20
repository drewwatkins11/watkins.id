import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts/Layout";
import {
  Stack,
  Heading,
  Container,
  Center,
  ChakraProvider,
  extendTheme,
  Text,
  HStack,
  Divider,
  Flex,
} from "@chakra-ui/react";
import renderAst from "../helpers/renderAst";
import { defaultTheme } from "../config/theme/chakraTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const BlogPostTemplate = (data) => {
  console.log("blog post", data);

  const {
    id,
    title,
    childrenMarkdownRemark,
    properties,
    updatedAt,
    createdAt,
  } = data.data.notion;

  const { polish, subheading, tags, type } = properties;
  const htmlAst = childrenMarkdownRemark[0].htmlAst;

  const creationDate = new Date(
    properties?.originalCreationDate?.value?.start || createdAt
  );
  const updateDate = new Date(updatedAt);
  const postSubhead: string = subheading?.value || null;
  const postType: string = type?.value.name || null;
  const postPolish: string = polish?.value.name || null;
  const postTags: [{ id: string; name: string }] = tags?.value || null;

  return (
    <Layout>
      <Center>
        <Container maxW={"80ch"}>
          <Stack spacing="xl">
            <Stack spacing="sm">
              <HStack spacing="xs">
                <Text fontWeight={700}>{postType}</Text>
                <Text>|</Text>
                <Text fontWeight={300}>{postPolish}</Text>
              </HStack>
              <Stack>
                <Heading as="h1">{title}</Heading>
                {postSubhead && (
                  <Text fontSize="xl" pb="lg">
                    {postSubhead}
                  </Text>
                )}
              </Stack>
              <Flex
                gap="lg"
                justify="space-between"
                align="flex-start"
                direction={["column", "column", "row"]}
              >
                <HStack spacing="md" align="flex-start">
                  <Text fontWeight={600} fontSize="xs">
                    Topics
                  </Text>
                  <Flex
                    pl="md"
                    borderLeft="2px solid"
                    borderColor="blueMunsell"
                    wrap="wrap"
                    gap="md"
                    rowGap=".2rem"
                  >
                    {postTags?.map((tag) => (
                      <Text color="blueMunsell" fontSize="xs" key={tag.id}>
                        {tag.name}
                      </Text>
                    ))}
                  </Flex>
                </HStack>
                <Flex
                  direction="column"
                  align={["flex-start", "flex-start", "flex-end"]}
                >
                  <Text fontSize="xs" whiteSpace="nowrap">
                    <Text as="span" fontWeight={600}>
                      Started:
                    </Text>{" "}
                    {creationDate.toDateString()}
                  </Text>
                  <Text fontSize="xs" whiteSpace="nowrap">
                    <Text as="span" fontWeight={600}>
                      Last updated:
                    </Text>{" "}
                    {updateDate.toDateString()}
                  </Text>
                </Flex>
              </Flex>
            </Stack>
            <Divider />
            {renderAst(htmlAst)}
          </Stack>
        </Container>
      </Center>
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
        timeToRead
      }
      properties {
        authorNote {
          value
        }
        polish {
          value {
            name
            id
          }
        }
        originalCreationDate {
          value {
            start
          }
        }
        subheading {
          value
        }
        tags {
          value {
            name
            id
          }
        }
        type {
          value {
            name
          }
        }
      }
      updatedAt
      createdAt
    }
  }
`;

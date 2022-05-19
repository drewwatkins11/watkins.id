import React from "react";
import {
  Flex,
  Heading,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Layout from "../layouts/Layout";

export default function Home() {
  return (
    <Layout>
      <Stack direction="column">
        <Text>About</Text>
        <Heading as="h1" size="h1">
          Drew Watkins
        </Heading>
        <Text>Product leader, developer, technologist, and tinkerer.</Text>
        <Stack>
          <Heading as="h2" size="h4">
            <strong>Find me on:</strong>
          </Heading>
          <UnorderedList>
            <ListItem>
              <Link href="https://medium.com/@drewwatkins11">Medium</Link>
            </ListItem>
            <ListItem>
              <Link href="https://linkedin.com/in/drewwatkins11">LinkedIn</Link>
            </ListItem>
          </UnorderedList>
        </Stack>
        <Stack>
          <Heading as="h2" size="h4">
            <strong>Listen to me</strong>
          </Heading>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/UGOYniUbDW0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/hcD7StumxN0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Stack>
      </Stack>
    </Layout>
  );
}

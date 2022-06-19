import React from "react";
import { Heading, Stack, Text } from "@chakra-ui/react";
import Layout from "../layouts/Layout";

export default function Home() {
  return (
    <Layout>
      <Stack direction="column">
        <Text>About</Text>
        <Heading as="h1" size="h1">
          Drew Watkins
        </Heading>
        <Text>
          Product strategist, technologist, occasional developer, and tinkerer.
        </Text>
        <Text>
          Currently leading product for{" "}
          <a href="https://interobang.group">Interobang</a>
        </Text>
      </Stack>
    </Layout>
  );
}

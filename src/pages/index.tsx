import React from "react";
import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Layout from "../layouts/Layout";

export default function Home() {
  return (
    <Layout>
      <Flex direction="column">
        <Text>About</Text>
        <Heading as="h1" size="h1">
          Drew Watkins
        </Heading>
        <Text>Product leader, developer, technologist, and tinkerer.</Text>
      </Flex>
    </Layout>
  );
}

import React from "react";
import { Heading, Stack, Text, Link as ExternalLink } from "@chakra-ui/react";
import Layout from "../layouts/Layout";
import { Link } from "gatsby";
import { fontSizeArray } from "../config/theme/components/Heading";

export default function Home() {
  return (
    <Layout hideHeaderLinks>
      <Stack direction="column" spacing="3xl">
        <Heading
          as="h1"
          fontWeight={400}
          fontStyle="italic"
          size="h1"
          fontSize={fontSizeArray}
        >
          <Text fontSize={fontSizeArray} fontWeight={900} as="span">
            Drew
          </Text>{" "}
          distills customer needs and market trends into innovative product
          strategy.{" "}
          <Text
            as="i"
            fontWeight={300}
            fontSize={["2xl", "3xl"]}
            lineHeight="2rem"
          >
            <br />
            (and sometimes builds cool things)
          </Text>
        </Heading>
        <Text fontSize="2xl" color="black" maxW="lg">
          Currently an Innovation Consultant on{" "}
          <strong>
            <ExternalLink color="salsa" href="https://www.erieinsurance.com/">
              Erie Insurance's
            </ExternalLink>
          </strong>{" "}
          Next Level Innovation team.
        </Text>
        <Stack>
          <Heading as="h4" fontSize="xl">
            Where to next?
          </Heading>
          <Link to="/garden">
            <Text color="salsa">Wander the garden</Text>
          </Link>
          <Link to="/about">
            <Text color="salsa">Learn more about me</Text>
          </Link>
        </Stack>
      </Stack>
    </Layout>
  );
}

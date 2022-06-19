import React from "react";
import Layout from "../layouts/Layout";
import { Flex, Stack, Heading, Button } from "@chakra-ui/react";
import { useState } from "react";

const Watch = () => {
  return (
    <Stack>
      <Heading as="h2" size="h4">
        <strong>Listen to me</strong>
      </Heading>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/UGOYniUbDW0"
        title="YouTube video player"
        // @ts-ignore
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        // @ts-ignore
        allowfullscreen
      ></iframe>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/hcD7StumxN0"
        title="YouTube video player"
        // @ts-ignore
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        // @ts-ignore
        allowfullscreen
      ></iframe>
    </Stack>
  );
};

const AboutPage = () => {
  const [currentPage, setCurrentPage] = useState<"about" | "resume" | "talks">(
    "about"
  );
  return (
    <Layout>
      <Flex>
        <Stack>
          <Button variant="link" onClick={() => setCurrentPage("about")}>
            About
          </Button>
          <Button variant="link" onClick={() => setCurrentPage("resume")}>
            Resumè
          </Button>
          <Button variant="link" onClick={() => setCurrentPage("talks")}>
            Talks
          </Button>
        </Stack>
      </Flex>
    </Layout>
  );
};

export default AboutPage;

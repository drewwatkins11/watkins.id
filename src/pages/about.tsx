import React from "react";
import Layout from "../layouts/Layout";
import {
  Flex,
  Stack,
  Heading,
  Button,
  Text,
  HStack,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import { useState } from "react";
import { useMemo } from "react";

const Watch = () => {
  return (
    <Stack>
      <Heading as="h2" size="h4">
        <strong>An exceprt of past talks</strong>
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

const About = () => {
  return (
    <Text>
      Product strategist, technologist, occasional developer, and tinkerer.
    </Text>
  );
};

const Resume = () => {
  return <></>;
};

const AboutPage = () => {
  const [currentPage, setCurrentPage] = useState<PageKeys>("about");

  const PageContent = useMemo(() => {
    switch (currentPage) {
      case "about":
        return <About />;
      case "resume":
        return <Resume />;
      case "talks":
        return <Watch />;
      default:
        break;
    }
  }, [[]]);

  const AboutLink = ({
    pageKey,
    label,
  }: {
    pageKey: PageKeys;
    label: string;
  }) => {
    console.log("pageKey", pageKey);
    return (
      <Button
        variant="link"
        onClick={() => setCurrentPage(pageKey)}
        color="independence"
        _active={{ color: "international" }}
        isActive={currentPage === pageKey}
      >
        {label}
      </Button>
    );
  };

  return (
    <Layout>
      <HStack spacing="3rem" align="flex-start">
        <Stack justify="flex-start" align="flex-start">
          <AboutLink pageKey="about" label="About" />
          <AboutLink pageKey="resume" label="Resumè" />
          <AboutLink pageKey="talks" label="Talks" />
        </Stack>
        <Box
          borderLeft="3px solid"
          borderColor="international"
          h="100%"
          pl="lg"
        >
          {PageContent}
        </Box>
      </HStack>
    </Layout>
  );
};

export default AboutPage;

type PageKeys = "about" | "resume" | "talks";

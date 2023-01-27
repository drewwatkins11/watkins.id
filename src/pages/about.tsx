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
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { useMemo } from "react";
import { isMobile } from "react-device-detect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

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
    <Stack>
      <Flex direction="column" pb="lg">
        <Text color="independence">about</Text>
        <Heading as="h1">Drew Watkins</Heading>
        <Text>
          Product strategist, technologist, occasional developer, and tinkerer.
        </Text>
      </Flex>
      {/* <Heading as="h2" fontSize="xl">
        What I do
      </Heading> */}
      <Text variant="serif">
        I bring products to life through product leadership, full-stack
        development, and human-centered design. Currently, I work as an
        Innovation Consultant at{" "}
        <Link href="https://erieinsurance.com">Erie Insurance</Link>, where I
        have the opportunity to drive innovation efforts within the company
        while also using human-centered design to create and shepherd products
        through the early stages of market adoption.
      </Text>

      <Text variant="serif">
        The road to get here has been meandering, but with two common threads:
        the importance of being able to “connect the dots” to build strategies
        that succeed and the ability to utilize my technical skill set to help
        build ideas and streamline processes.
      </Text>

      <Text variant="serif">
        Over the years, I've continually shifted between development and
        strategy roles, even within the same job. At{" "}
        <Link href="https://castandhue.com">Cast &amp; Hue</Link>, my title
        switch from Strategist to Analyst was long after I started building
        novel first-party analysis tools and new digital product deliverables.
        At <Link href="https://interobang.group">Interobang</Link>, I switched
        between development and product management roles on a regular basis.
      </Text>

      <Text variant="serif">
        My professional passions exist at the intersection of emerging
        technologies, human-centered design, and the humanization of technology.
        I’m inspired by projects that seek to rediscover balance - balance
        within the natural world, balance within the human condition, and
        balance with technology. I have a particular interest in productivity
        tools and how the right tools and culture can bring thoughtfulness and
        balance back to the workplace. I love learning and I’m fueled by quickly
        changing environments where I’m challenged to adapt quickly through
        innovation, ideation, and the pursuit of new knowledge.
      </Text>

      <Text variant="serif">
        Outside of work, I like to step away from the computer and get outside!
        I enjoy gardening, hiking, cross-country skiing, camping, and
        backpacking. I’m also a big fan of Goruck and participate in a couple of
        events each year. It’s great for both physical endurance testing and
        building leadership skills.
      </Text>
    </Stack>
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
        fontWeight={400}
        _active={{ color: "international" }}
        isActive={currentPage === pageKey}
      >
        {label}
      </Button>
    );
  };

  return (
    <Layout>
      <HStack spacing={isMobile ? "1rem" : "3rem"} align="flex-start">
        <Stack justify="flex-start" align="flex-start">
          <AboutLink pageKey="about" label="About" />
          {/* <AboutLink pageKey="resume" label="Resumè" /> */}
          <AboutLink pageKey="talks" label="Talks" />
          <Link
            href="https://linkedin.com/in/drewwatkins11"
            isExternal
            color="independence"
            whiteSpace="nowrap"
          >
            <Text whiteSpace="nowrap">
              LinkedIn{" "}
              <Text as="span" fontSize="sm">
                <FontAwesomeIcon icon={solid("arrow-up-right-from-square")} />
              </Text>
            </Text>
          </Link>
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

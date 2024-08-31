import React from "react";
import { Stack, Text, Link as ExternalLink, Box, Flex } from "@chakra-ui/react";
import Layout from "../layouts/Layout";
import { Link } from "gatsby";
import { fontSizeArray } from "../config/theme/components/Heading";
import { colorPalettes } from "../config/theme/colors";

const nameList: { name: string; link: string; isExternal: boolean }[] = [
  {
    name: "Brian",
    link: "https://www.linkedin.com/in/brwatkins1/",
    isExternal: true,
  },
  { name: "Drew", link: "/drew", isExternal: false },
];

export default function Home() {
  const NameElement = (props) => (
    <Text as="h1" fontWeight={400} size="h1" fontSize={fontSizeArray}>
      {props.name}
    </Text>
  );

  return (
    <Layout hideHeader hideHeaderLinks>
      <Stack
        direction={["column", "row"]}
        w="full"
        h="calc(100vh - 80px)"
        gap="1rem"
        _before={{
          content: "''",
          border: `1px dotted ${colorPalettes.earth[700]}`,
          alignSelf: "stretch",
          marginTop: "80px",
        }}
      >
        {nameList.map((name, index) => (
          <Flex
            key={index}
            h="full"
            w="full"
            justifyContent={["flex-start", "center"]}
            alignItems="center"
            _first={{ order: "-1" }}
          >
            <Stack gap="0px">
              <Text>Learn more about</Text>
              {name.isExternal ? (
                <ExternalLink href={name.link} isExternal>
                  <NameElement name={name.name} />
                </ExternalLink>
              ) : (
                <Link to={name.link}>
                  <NameElement name={name.name} />
                </Link>
              )}
            </Stack>
          </Flex>
        ))}
      </Stack>
    </Layout>
  );
}

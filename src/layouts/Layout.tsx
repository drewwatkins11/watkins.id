import { Center, Flex, FlexProps } from "@chakra-ui/react";
import React from "react";
import Fonts from "../components/layout/Fonts";
import Header from "../components/layout/Header";
import Helmet from "react-helmet";
import { siteMetadata } from "../../site.config.js";

const Layout = ({
  children,
  hideHeader,
  hideHeaderLinks,
  headerProps,
}: {
  children: React.ReactNode;
  hideHeader?: boolean;
  hideHeaderLinks?: boolean;
  headerProps?: FlexProps;
}) => {
  console.dir(siteMetadata);
  return (
    <>
      <Helmet>
        <title>{siteMetadata.baseTitle}</title>
      </Helmet>
      <Fonts />
      <Center mb="4rem">
        <Flex w={["90vw", "85vw", "80vw"]} maxW="1140px" direction="column">
          {!hideHeader && (
            <Header
              mb="2xl"
              hideHeaderLinks={hideHeaderLinks}
              {...headerProps}
            />
          )}
          {children}
        </Flex>
      </Center>
    </>
  );
};

export default Layout;

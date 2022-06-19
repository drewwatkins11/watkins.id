import { Center, Flex } from "@chakra-ui/react";
import React from "react";
import Fonts from "../components/layout/Fonts";
import Header from "../components/layout/Header";

const Layout = ({
  children,
  hideHeader,
}: {
  children: React.ReactNode;
  hideHeader?: boolean;
}) => {
  return (
    <>
      <Fonts />
      <Center>
        <Flex w={["90vw", "85vw", "80vw"]} maxW="1140px" direction="column">
          {!hideHeader && <Header />}
          {children}
        </Flex>
      </Center>
    </>
  );
};

export default Layout;

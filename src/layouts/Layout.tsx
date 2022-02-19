import { Center, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Fonts from "../components/layout/Fonts";
import Header from "../components/layout/Header";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Fonts />
      <Center>
        <Flex w="90vw" maxW="1200px" direction="column">
          <Header />
          {children}
        </Flex>
      </Center>
    </>
  );
};

export default Layout;

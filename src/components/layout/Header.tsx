import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import Logomark from "../../assets/img/dw_logomark.svg";

const Header: React.FC = () => {
  return (
    <Flex w="full" justify="space-between" direction="row">
      {/* <img src={Logomark} /> */}
    </Flex>
  );
};

export default Header;

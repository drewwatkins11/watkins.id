import React from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import { Link, navigate } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

const Header: React.FC = () => {
  return (
    <Flex w="full" justify="space-between" direction="row">
      <Link to="/">
        <strong>Drew Watkins</strong>
      </Link>
      <HStack>
        <Link to="/garden">Garden</Link>
        <Link to="/about">About</Link>
        <Tooltip label="Some of my older writing is still on Medium">
          <IconButton
            aria-label="Medium"
            icon={<FontAwesomeIcon icon={brands("medium")} />}
            onClick={() =>
              navigate("https://medium.com/@drewwatkins11", {
                replace: true,
              })
            }
          />
        </Tooltip>
        <Tooltip label="Connect with me on LinkedIn">
          <IconButton
            aria-label="LinkedIn"
            icon={<FontAwesomeIcon icon={brands("linkedin")} />}
            onClick={() =>
              navigate("https://www.linkedin.com/in/drewwatkins11/", {
                replace: true,
              })
            }
          />
        </Tooltip>
        <Tooltip label="See what I'm working on on GitHub">
          <IconButton
            aria-label="Github"
            icon={<FontAwesomeIcon icon={brands("github")} />}
            onClick={() =>
              navigate("https://github.com/drewwatkins11", { replace: true })
            }
          />
        </Tooltip>
      </HStack>
    </Flex>
  );
};

export default Header;

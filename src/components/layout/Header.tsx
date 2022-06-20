import React from "react";
import {
  Box,
  Button,
  Flex,
  FlexProps,
  HStack,
  IconButton,
  Text,
  Tooltip,
  Link,
  Menu,
  MenuButton,
  MenuList,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { Link as GatsbyLink, navigate } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { colors } from "../../config/theme/colors";
import { isMobile } from "react-device-detect";

const SocialLinks = () => {
  return (
    <Flex>
      <Tooltip label="Some of my older writing is still on Medium">
        <IconButton
          colorScheme="transparent"
          color="black"
          minW="35px"
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
          colorScheme="transparent"
          color="black"
          minW="35px"
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
          colorScheme="transparent"
          color="black"
          minW="35px"
          aria-label="Github"
          icon={<FontAwesomeIcon icon={brands("github")} />}
          onClick={() =>
            navigate("https://github.com/drewwatkins11", { replace: true })
          }
        />
      </Tooltip>
    </Flex>
  );
};

const Header = ({ hideHeaderLinks, ...props }: HeaderProps) => {
  const MenuLinks = () => {
    return (
      <Stack
        direction={isMobile ? "column" : "row"}
        spacing="lg"
        align="center"
      >
        {!hideHeaderLinks && (
          <Stack
            direction={isMobile ? "column" : "row"}
            spacing="lg"
            align={isMobile && "center"}
          >
            <Link to="/garden" as={GatsbyLink}>
              Digital Garden
            </Link>
            <Link to="/about" as={GatsbyLink}>
              About Me
            </Link>
            {!isMobile && <Text>|</Text>}
          </Stack>
        )}
        <SocialLinks />
      </Stack>
    );
  };

  const MobileMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        <IconButton
          aria-label="Open mobile menu"
          icon={<FontAwesomeIcon icon={solid("bars")} />}
          onClick={onOpen}
          backgroundColor="transparent"
        />

        <Modal isOpen={isOpen} onClose={onClose} size="full">
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody h="full" minH="full">
              <Box mt="50%">
                <MenuLinks />
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  };

  return (
    <Flex
      w="full"
      justify="space-between"
      direction="row"
      alignItems="center"
      py="md"
      {...props}
    >
      <Link as={GatsbyLink} to="/" _hover={{ textDecor: "none" }}>
        <Text
          fontSize="1.5rem"
          variant="serif"
          fontWeight={700}
          color="xiketic"
        >
          Drew Watkins
        </Text>
      </Link>
      {isMobile ? (
        hideHeaderLinks ? (
          <SocialLinks />
        ) : (
          <MobileMenu />
        )
      ) : (
        <MenuLinks />
      )}
    </Flex>
  );
};

export default Header;

interface HeaderProps extends FlexProps {
  hideHeaderLinks?: boolean;
}

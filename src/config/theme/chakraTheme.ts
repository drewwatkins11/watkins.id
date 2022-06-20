import { colors, colorPalettes, colorKeys } from "./colors";
import Text from "./components/Text";
import Heading, { fontSizeArray } from "./components/Heading";
import { extendTheme } from "@chakra-ui/react";

export const defaultTheme = {
  colors: {
    ...colors,
    ...colorPalettes,
    ...colorKeys,
  },
  fonts: {
    heading: "Comorant",
    body: "Open Sans",
  },
  textStyles: {
    h1: {
      fontSize: fontSizeArray,
    },
  },
  fontSizes: {
    md: "20px",
  },
  components: {
    Text,
    Heading,
    Divider: {
      baseStyle: {
        borderColor: "gray.500",
      },
    },
  },
  space: {
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.25rem",
    xl: "1.75rem",
    "2xl": "2.25rem",
    "3xl": "3rem",
  },
  styles: {
    global: {
      ":root": {
        fontSize: "1.25rem",
        color: colors.blackChocolate,
      },
      a: {
        textDecoration: "underline 0.10em rgba(255, 255, 255, 0)",
        transition: "text-decoration-color 300ms",
        _hover: {
          textDecorationColor: colors.international,
        },
      },
      "html, body": {
        color: colorKeys.text,
        backgroundColor: colorPalettes.earth[50],
      },
    },
  },
};

const chakraTheme = extendTheme(defaultTheme);

export default chakraTheme;

import { colors, colorPalettes, colorKeys } from "./colors";
import Text from "./components/Text";
import Heading from "./components/Heading";

const chakraTheme = {
  colors: {
    ...colors,
    ...colorPalettes,
    ...colorKeys,
  },
  fonts: {
    heading: "Butler",
    body: "Open Sans",
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
      },
      "html, body": {
        color: colorKeys.text,
        backgroundColor: colorPalettes.earth[100],
      },
    },
  },
};

export default chakraTheme;
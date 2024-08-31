import type { ComponentStyleConfig } from "@chakra-ui/theme";

export const fontSizeArray = ["4xl", "3rem", "4rem"];
export const lineHeightArray = ["4xl", "3.15rem", "4.15rem"];

const Heading: ComponentStyleConfig = {
  variants: {
    sansSerif: {
      fontFamily: "body",
    },
  },
  sizes: {
    h1: {
      fontSize: fontSizeArray,
      lineHeight: lineHeightArray,
      fontWeight: "800",
    },
  },
  defaultProps: {
    margin: "0rem",
    marginTop: "0rem",
  },
};

export default Heading;

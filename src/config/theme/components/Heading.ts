import type { ComponentStyleConfig } from "@chakra-ui/theme";

const Heading: ComponentStyleConfig = {
  sizes: {
    h1: {
      fontSize: "3rem",
      lineHeight: "3.25rem",
      fontWeight: "800",
    },
  },
  variants: {
    sansSerif: {
      fontFamily: "body",
    },
  },
  defaultProps: {
    margin: "0rem",
    marginTop: "0rem",
  },
};

export default Heading;

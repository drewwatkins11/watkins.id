import React from "react";
import rehypeReact from "rehype-react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { Text } from "@chakra-ui/react";

const renderAst = new rehypeReact({
  createElement: React.createElement,
  // @ts-ignore
  components: {
    ...ChakraUIRenderer(),
    p: (props) => {
      const { children } = props;
      return (
        <Text variant="serif" mb={2}>
          {children}
        </Text>
      );
    },
    blockquote: (props) => {
      const { children } = props;
      return (
        <Text borderLeft="2px solid" borderColor="gunmetal" pl="md">
          {children}
        </Text>
      );
    },
  },
}).Compiler;

export default renderAst;

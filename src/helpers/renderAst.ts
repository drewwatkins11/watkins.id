import React from "react";
import rehypeReact from "rehype-react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    ...ChakraUIRenderer(),
  },
}).Compiler;

export default renderAst;

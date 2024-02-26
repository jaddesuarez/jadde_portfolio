import { extendTheme } from "@chakra-ui/react";

const chakraTheme = extendTheme({
  fonts: {
    body: `'Montserrat', sans-serif`,
    heading: `'Montserrat', sans-serif`,
  },
  styles: {
    global: {
      "html, body": {
        scrollBehavior: "smooth",
      },
    },
  },
});

export default chakraTheme;

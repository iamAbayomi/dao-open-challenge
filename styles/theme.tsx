import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  lm: "21em", //340px
  sm: "40em", // 640px
  md: "52em", // 832px
  lg: "64em", // 1024px
  xl: "80em", // 1280px
  " 2xl": ""
};

export const theme = extendTheme({ breakpoints });

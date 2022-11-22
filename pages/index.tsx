import { Box, Text } from "@chakra-ui/react";
import Banner from "./components/Banner";
import Header from "./components/Header";
export default function Home() {
  return (
    <Box>
      <Banner />
      <Header />
    </Box>
  );
}

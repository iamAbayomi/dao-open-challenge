import { Box, Text } from "@chakra-ui/react";
import DiscoverSection from "../../components/DiscoverSection";
import HomeLayout from "../../components/Layout/HomeLayout";

const Index = () => {
  return (
    <HomeLayout>
      <Box margin={"100px 0px 20px 50px"}>
        <DiscoverSection />
      </Box>
    </HomeLayout>
  );
};

export default Index;

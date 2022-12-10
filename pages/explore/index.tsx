import { Box, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import HomeLayout from "../../components/Layout/HomeLayout";

const DiscoverSection = dynamic(
  () => import("../../components/DiscoverSection")
);

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

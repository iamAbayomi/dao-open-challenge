import { Box, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import HomeLayout from "../../layout/HomeLayout";

const DiscoverSection = dynamic(
  () => import("../../components/DiscoverSection")
);

const Index = () => {
  return (
    <HomeLayout isDark={false}>
      <Box margin={"100px 0px 20px 50px"}>
        <Box p={"0px 30px 0px 50px"}>
          <DiscoverSection />
        </Box>
      </Box>
    </HomeLayout>
  );
};

export default Index;

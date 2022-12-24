import { Box, Text } from "@chakra-ui/react";
import Header from "../../components/Header";
import { aboutusData } from "../../utils/dummydata";

const Index = () => {
  return (
    <Box background={"black"} color={"white"} pb={"200px"}>
      <Header isDark />
      <Box mt={"100px"}>
        {aboutusData?.map((item) => (
          <Box key={item?.id} m={"191px 40px 0px 90px"}>
            <Text fontWeight={"700"} fontSize={"66px"}>
              {item?.title}
            </Text>
            <Box border={"1px solid white"} />
            <Text m={"20px 0px"}>{item?.firstText}</Text>
            <Text m={"20px 0px"}>{item?.secondText}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Index;

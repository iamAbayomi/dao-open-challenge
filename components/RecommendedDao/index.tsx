import { Box, Button, Text, Image } from "@chakra-ui/react";
import { IDaoContainer } from "../../types";
import Tags from "../Tags";

interface Props {
  item: IDaoContainer;
}

const RecommendedDaos = ({ item }: Props) => {
  return (
    <Box>
      <Box
        maxWidth={"max-content"}
        border={"0.1px solid #B1B1B1"}
        borderRadius={"20px"}
        background={"#F8F8F8"}
        p={"20px 30px 20px"}
      >
        <Box display={"flex"} alignItems={"center"}>
          <Image
            height={"40px"}
            width={"40px"}
            alt={"appLogo"}
            src={item?.appLogo}
          />
          <Text ml={"10px"} fontWeight={"700"} fontSize={"32px"}>
            {item?.title}
          </Text>
        </Box>
        <Box
          display={"flex"}
          margin={"35px 0px 30px 0px"}
          alignItems={"center"}
          gap={"20px"}
        >
          <Tags text={"Social"} color={"rgba(236, 91, 91, 0.5)"} />
          <Tags text={"Top 10 Trending DAO"} color={"rgba(0, 255, 240, 0.5)"} />
        </Box>
        <Text
          m={"40px 0px 60px"}
          fontWeight={"400"}
          fontSize={"13px"}
          maxWidth={"300px"}
        >
          {item?.description}
        </Text>
        <Button
          fontWeight={"400"}
          fontSize={"14px"}
          color={"white"}
          background={"#000000"}
          p={"16px 50px 16px 50px"}
        >
          <Text>View Details</Text>
          <Image
            ml={"10px"}
            width={"18px"}
            alt="arrow-up"
            src="./arrow-up-right.svg"
          />
        </Button>
      </Box>
    </Box>
  );
};

export default RecommendedDaos;

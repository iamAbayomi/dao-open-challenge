import { Box, Button, Text, Image } from "@chakra-ui/react";
import { MdOutlineStarPurple500 } from "react-icons/md";
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
        p={"40px 30px 37px"}
        boxSizing={"border-box"}
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
          fontWeight={"500"}
          fontSize={"16px"}
          maxWidth={"300px"}
        >
          {item?.description}
        </Text>
        <Box display={"flex"} m={"0px 0px 47px"}>
          <MdOutlineStarPurple500 size={"22px"} color="#FFB800" />
          <MdOutlineStarPurple500 size={"22px"} color="#FFB800" />
          <MdOutlineStarPurple500 size={"22px"} color="#FFB800" />
          <MdOutlineStarPurple500 size={"22px"} color="#FFB800" />
          <MdOutlineStarPurple500 size={"22px"} color="#B0B0B0" />
        </Box>
        <Box maxWidth={"max-content"} margin={"0px auto 0px"}>
          <Button
            fontWeight={"400"}
            color={"white"}
            background={"#000000"}
            p={"16px 50px 16px 50px"}
            _focus={{ background: "black" }}
            _hover={{ background: "black" }}
          >
            <Text fontSize={"18px"}>View Details</Text>
            <Image
              ml={"10px"}
              width={"18px"}
              alt="arrow-up"
              src="./arrow-up-right.svg"
            />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default RecommendedDaos;

import { Box, Text, Image, Button } from "@chakra-ui/react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IDaoContainer } from "../../../types";
import Tags from "../Tags";

interface IProps {
  item: IDaoContainer;
}

const DaoContainer = ({ item }: IProps) => {
  return (
    <Box
      className="dao-container"
      background={
        "linear-gradient(105.6deg, #F8F8F8 0%, rgba(248, 248, 248, 0) 100%)"
      }
      minWidth={"max-content"}
      minHeight={"max-content"}
      p={"35px 18px 24px 38px"}
      boxSizing={"border-box"}
      borderRadius={"20px"}
      border={"1px solid #B1B1B1"}
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
        <Box display={"flex"} ml={"22px"}>
          <MdOutlineStarPurple500 size={"22px"} color="#FFB800" />
          <MdOutlineStarPurple500 size={"22px"} color="#FFB800" />
          <MdOutlineStarPurple500 size={"22px"} color="#FFB800" />
          <MdOutlineStarPurple500 size={"22px"} color="#FFB800" />
          <MdOutlineStarPurple500 size={"22px"} color="#B0B0B0" />
        </Box>
      </Box>
      <Box display={"flex"} margin={"35px 0px 0px 0px"}>
        <Tags text={"Social"} color={"rgba(236, 91, 91, 0.5)"} />
        <Tags text={"Top 10 Trending DAO"} color={"rgba(0, 255, 240, 0.5)"} />
      </Box>
      <Box mt={"30px"}>
        <Text fontWeight={"400"} fontSize={"13px"} maxWidth={"600px"}>
          {item?.description}
        </Text>
      </Box>
      <Box
        margin={"61px 0px 0px 0px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box display={"flex"} alignItems={"center"}>
          <Image
            width={"100px"}
            alt="userprofile"
            src="../userprofilepic.svg"
          />
          <Text ml={"10px"} fontWeight={"400"} fontSize={"13px"}>
            1,000+ Contributors
          </Text>
        </Box>
        <Button
          fontWeight={"400"}
          fontSize={"14px"}
          color={"white"}
          background={"#000000"}
          p={"16px 50px 16px 50px"}
        >
          <Text>Join DAO</Text>
          <Image width={"18px"} alt="arrow-up" src="./arrow-up-right.svg" />
        </Button>
      </Box>
    </Box>
  );
};

export default DaoContainer;

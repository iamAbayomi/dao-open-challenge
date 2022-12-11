import { Box, Text } from "@chakra-ui/react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { IDaoContainer } from "../../types";
import { hotDaoData, newDaoData } from "../../utils/dummydata";
import DaoContainer from "../DaoContainer";
import DiscoverDao from "../DiscoverDao";

const DiscoverSection = () => {
  return (
    <Box>
      <Box>
        <Box>
          <DiscoverDao />
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            m={"130px 0px 0px 0px"}
          >
            <Text fontSize={"20px"} fontWeight={"700"}>
              🔥 Hot DAOs
            </Text>
            <Box display={"flex"} mr={"50px"}>
              <Box
                background={"#F2F2F2"}
                maxWidth={"max-content"}
                borderRadius={"5px"}
                p={"7px 2px 0px 2px"}
              >
                <IoMdArrowBack />
              </Box>
              <Box
                background={"#F2F2F2"}
                ml={"20px"}
                p={"7px 2px 0px 2px"}
                maxWidth={"max-content"}
                borderRadius={"5px"}
              >
                <IoMdArrowForward />
              </Box>
            </Box>
          </Box>
          <Box
            display={"flex"}
            margin={"30px 0px 0px 0px"}
            alignItems={"center"}
            overflow={"scroll"}
            width={"100%"}
            height={"400px"}
          >
            {hotDaoData?.map((item: IDaoContainer) => (
              <DaoContainer key={item?.id} item={item} />
            ))}
          </Box>
        </Box>

        <Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            m={"130px 0px 0px 0px"}
          >
            <Text fontSize={"20px"} fontWeight={"700"}>
              🆕 New DAOs
            </Text>
            <Box display={"flex"} mr={"50px"}>
              <Box
                background={"#F2F2F2"}
                maxWidth={"max-content"}
                borderRadius={"5px"}
                p={"7px 2px 0px 2px"}
              >
                <IoMdArrowBack />
              </Box>
              <Box
                background={"#F2F2F2"}
                ml={"20px"}
                p={"7px 2px 0px 2px"}
                maxWidth={"max-content"}
                borderRadius={"5px"}
              >
                <IoMdArrowForward />
              </Box>
            </Box>
          </Box>
          <Box
            display={"flex"}
            margin={"30px 0px 0px 0px"}
            overflowX={"scroll"}
            width={"100%"}
            height={"400px"}
          >
            {newDaoData?.map((item: IDaoContainer) => (
              <DaoContainer key={item?.id} item={item} />
            ))}
          </Box>
        </Box>
        <Text fontWeight={"400"} mt={"53px"} textAlign={"center"}>
          See More
        </Text>
      </Box>
    </Box>
  );
};

export default DiscoverSection;

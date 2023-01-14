import { Box, Text } from "@chakra-ui/react";
import { useRef } from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { IDaoContainer } from "../../types";
import { hotDaoData, newDaoData } from "../../utils/dummydata";
import DaoContainer from "../DaoContainer";
import DiscoverDao from "../DiscoverDao";

const DiscoverSection = () => {
  const hotDaoRef = useRef<HTMLDivElement>(null);
  const newDaoRef = useRef<HTMLDivElement>(null);
  let interval: any;

  function moveTheHotDaoForward() {
    hotDaoRef!!.current!!.scrollLeft += 20;
  }

  function moveTheHotDaoBackward() {
    hotDaoRef!!.current!!.scrollLeft -= 20;
  }

  function moveTheNewDaoForward() {
    newDaoRef!!.current!!.scrollLeft += 20;
  }

  function moveTheNewDaoBackward() {
    newDaoRef!!.current!!.scrollLeft -= 20;
  }

  function setDaoInterval(daoMethod: () => void) {
    interval = setInterval(moveTheNewDaoBackward, 1000);
  }

  function clearDaoInterval() {
    clearInterval(interval);
  }

  return (
    <Box>
      <Box>
        <Box>
          <DiscoverDao />
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            m={"130px 0px 0px 0px"}
            alignItems={"center"}
          >
            <Text fontSize={"28px"} fontWeight={"700"}>
              🔥 Hot DAOs
            </Text>
            <Box display={"flex"} mr={"50px"}>
              <Box
                background={"#F2F2F2"}
                maxWidth={"max-content"}
                borderRadius={"5px"}
                p={"4px 7px 4px 7px"}
              >
                <IoMdArrowBack onClick={moveTheHotDaoBackward} />
              </Box>
              <Box
                background={"#F2F2F2"}
                ml={"20px"}
                p={"4px 7px 4px 7px"}
                maxWidth={"max-content"}
                borderRadius={"5px"}
              >
                <IoMdArrowForward onClick={moveTheHotDaoForward} />
              </Box>
            </Box>
          </Box>
          <Box
            display={"flex"}
            margin={"10px 0px 0px 0px"}
            alignItems={"center"}
            overflow={"scroll"}
            width={"100%"}
            height={"400px"}
            ref={hotDaoRef}
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
            alignItems={"center"}
            m={"130px 0px 0px 0px"}
          >
            <Text fontSize={"28px"} fontWeight={"700"}>
              🆕 New DAOs
            </Text>
            <Box display={"flex"} mr={"50px"}>
              <Box
                background={"#F2F2F2"}
                maxWidth={"max-content"}
                borderRadius={"5px"}
                p={"4px 7px 4px 7px"}
                onClick={moveTheNewDaoBackward}
              >
                <IoMdArrowBack />
              </Box>
              <Box
                background={"#F2F2F2"}
                ml={"20px"}
                p={"4px 7px 4px 7px"}
                maxWidth={"max-content"}
                borderRadius={"5px"}
                onClick={moveTheNewDaoForward}
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
            ref={newDaoRef}
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

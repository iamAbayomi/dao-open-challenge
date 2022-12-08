import { Box, Image, Input, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { badgeData, hotDaoData, newDaoData } from "../utils/dummydata";
import Badge from "./components/Badge";
import Banner from "./components/Banner";
import Header from "./components/Header";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import ValuePropositon from "./components/ValueProposition";
import DaoContainer from "./components/Dao";
import { IDaoContainer } from "../types";

const Span = styled.span`
  color: black;
`;

export default function Home() {
  return (
    <Box>
      <Box pb={"100px"}>
        <Banner />
        <Header />
        <ValuePropositon />
        <Box margin={"200px 0px 20px 50px"}>
          <Text color={"#FF7A00"} fontWeight={"700"} fontSize={"56px"}>
            Discover <Span> our</Span> DAOs
          </Text>
          <Text fontWeight={"400"}>
            We have over 1,000 Active DAOs for you to Explore
          </Text>
          <Box
            margin={"32px 0px 0px 0px"}
            display={"flex"}
            alignItems={"center"}
          >
            <Box
              height={"70px"}
              width={"700px"}
              border={"1px solid #BEBEBE"}
              borderRadius={"20px"}
              background={"#FBFBFB"}
            >
              <Box
                display={"flex"}
                margin={"25px 67px 12px 37px"}
                boxSizing={"border-box"}
              >
                <Image
                  width={"20px"}
                  height={"20px"}
                  alt="search"
                  src="./search.svg"
                />
                <Text
                  ml={"15px"}
                  color={"#919191"}
                  fontWeight={"400"}
                  fontSize={"12px"}
                >
                  Search for DAOs
                </Text>
              </Box>
            </Box>
            <Box
              display={"flex"}
              background={"#FBFBFB"}
              p={"10px 20px"}
              ml={"30px"}
              boxSizing={"border-box"}
              border={"1px solid #DBDBDB"}
              borderRadius={"10px"}
            >
              <Image height={"24px"} alt={"grid"} src={"./grid.svg"} />
              <Text ml={"15px"} fontWeight={"400"}>
                Grid View
              </Text>
            </Box>
          </Box>

          <Box
            mt={"49px"}
            display={"flex"}
            width={"100%"}
            alignItems={"center"}
          >
            {badgeData?.map((item) => (
              <Badge key={item?.id} item={item} />
            ))}

            <Box fontSize={"14px"} background={"black"} borderRadius={"20px"}>
              <Text m={"10px 20px"} color={"white"}>
                View More
              </Text>
            </Box>
          </Box>

          <Box>
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
        </Box>
      </Box>
    </Box>
  );
}

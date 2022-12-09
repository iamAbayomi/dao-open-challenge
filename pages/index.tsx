import { Box, Image, Input, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import {
  badgeData,
  hotDaoData,
  infoData,
  newDaoData
} from "../utils/dummydata";
import Badge from "./components/Badge";
import Banner from "./components/Banner";
import Header from "./components/Header";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import ValuePropositon from "./components/ValueProposition";
import DaoContainer from "./components/Dao";
import { IDaoContainer, IInfoContainer } from "../types";
import DiscoverDao from "./components/DiscoverDao";
import InfoContainer from "./components/InfoContainer";
import DiscoverSection from "./components/DiscoverSection";

const OrangeText = styled.span`
  color: #ff7a00;
`;

export default function Home() {
  return (
    <Box>
      <Box pb={"100px"}>
        <Banner />
        <Header />
        <ValuePropositon />
        <Box margin={"200px 0px 20px 50px"}>
          <DiscoverSection />
          <Box>
            <Box>
              <Text
                mt={"154px"}
                fontSize={"56px"}
                fontWeight={"700"}
                textAlign={"center"}
              >
                How to make your first <br></br> <OrangeText>DAO </OrangeText>{" "}
                Contribution
              </Text>
              <Text fontWeight={"300"} textAlign={"center"}>
                We have over 1,000 Active DAOs for you to Explore
              </Text>
            </Box>
            <Box m={"140px auto 100px"} maxWidth={"900px"} display={"flex"}>
              {infoData.map((item: IInfoContainer) => (
                <InfoContainer key={item.id} item={item} />
              ))}
            </Box>
            <Box margin={"200px 0px 0px 0px"}>
              <Text fontWeight={"700"} fontSize={"35px"}>
                Get involved without leaving the platform
              </Text>
              <Text maxWidth={"500px"} fontWeight={"300"} fontSize={"14px"}>
                We’re making it easier than ever to get involved with change by
                letting you join DAO without leaving the site
              </Text>
            </Box>
          </Box>
          <Box display={"flex"}>
            <Box>
              <Image alt={"firstsvg"} src={"./first-container.svg"} />
              <Image alt="secondsvg" src="./second-container.svg" />
            </Box>
            <Box>
              <Text fontWeight={"700"} fontSize={"30px"}>
                Govern your Assests
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

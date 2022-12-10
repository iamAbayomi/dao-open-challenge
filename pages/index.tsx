import { Box, Button, Image, Input, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import {
  badgeData,
  gettingStartedData,
  governAssets,
  headerData,
  hotDaoData,
  infoData,
  newDaoData,
  resourcesData
} from "../utils/dummydata";
import Badge from "./components/Badge";
import Banner from "./components/Banner";
import Header from "./components/Header";
import ValuePropositon from "./components/ValueProposition";
import { IDaoContainer, IHeaderLink, IInfoContainer, IItem } from "../types";
import DiscoverDao from "./components/DiscoverDao";
import InfoContainer from "./components/InfoContainer";
import DiscoverSection from "./components/DiscoverSection";
import GettingStartedComponent from "./components/GettingStarted/GettingStartedComponent";
import HeaderText from "./components/HeaderText";

const OrangeText = styled.span`
  color: #ff7a00;
`;

export default function Home() {
  return (
    <Box>
      <Box pb={"0px"}>
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
          <Box margin={"173px 0px 0px 0px"} display={"flex"}>
            <Box>
              <Image
                w={"500px"}
                alt={"firstsvg"}
                src={"./first-container.svg"}
              />
              <Image
                margin={"52px 0px 0px 100px"}
                w={"500px"}
                alt="secondsvg"
                src="./second-container.svg"
              />
            </Box>
            <Box ml={"130px"}>
              <Text fontWeight={"700"} fontSize={"33px"}>
                Govern your Assests
              </Text>
              {governAssets.map((item, index) => (
                <Box key={index} mt={"61px"}>
                  <Box display={"flex"} alignItems={"center"} mt={"51px"}>
                    <Image alt="" src="discover.svg" />
                    <Text ml={"34px"} fontWeight={"300"}>
                      Govern and make decisions about your assets here
                    </Text>
                  </Box>
                  <Box
                    margin={"30px 0px 0px 60px"}
                    borderBottom={"1px solid #DFDFDF"}
                  />
                </Box>
              ))}
            </Box>
          </Box>
          <Box
            display={"flex"}
            margin={"200px auto 78px"}
            maxWidth={"max-content"}
            border={"0.1px solid #000000"}
            borderRadius={"10px"}
            p={"6px 10px"}
          >
            <Image alt={""} src={"./question-mark.svg"} />
            <Text ml={"8px"} fontWeight={"300"} fontSize={"15px"}>
              Frequently Asked Questions
            </Text>
          </Box>
          <Box id={"getting-started-section"}>
            <Text fontWeight={"700"} fontSize={"40px"} textAlign={"center"}>
              Getting Started
            </Text>
            <Box margin={"auto"} maxW={"1000px"}>
              {gettingStartedData.map((item, index) => (
                <GettingStartedComponent key={index} text={item} />
              ))}
            </Box>
          </Box>
          <Box
            margin={"275px auto 0px auto"}
            maxWidth={"1100px"}
            background={"#C2EC5B"}
            p={"60px 60px"}
            borderRadius={"20px"}
            boxSizing={"border-box"}
          >
            <Box
              m={"0px 40px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Text fontSize={"34px"} fontWeight={"740"}>
                Join our community.
                <br /> Change the world.
              </Text>
              <Box display={"flex"}>
                <Input
                  background={"white"}
                  maxW={"340px"}
                  placeholder={"Your Favourite Email Address"}
                  _placeholder={{ fontSize: "12px", color: "#CCCCCC" }}
                />
                <Button
                  w={"max-content"}
                  ml={"18px"}
                  p={"20px 30px 20px 30px"}
                  background={"black"}
                  color={"white"}
                >
                  <Text fontSize={"12px"}>Join Newsletter</Text>
                </Button>
              </Box>
            </Box>
          </Box>
          <Box p={"100px 40px 60px 60px"}>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Box>
                <Image
                  marginBottom={"40px"}
                  width={"74px"}
                  alt="app-logo"
                  src="./app-logo.svg"
                />
                <Text fontWeight={"350"} fontSize={"13px"}>
                  Join Our Community
                </Text>
                <Box mt={"30px"} display={"flex"}>
                  <Image width={"35px"} alt={"chat"} src={"./chat.svg"} />
                  <Image
                    width={"35px"}
                    ml={"30px"}
                    alt="twitter"
                    src="./twitter.svg"
                  />
                </Box>
              </Box>
              <Text mt={"60px"} fontWeight={"330"} fontSize={"15px"}>
                The one-stop-shop to find, invest <br /> and vote in
                extraordinary DAOs
              </Text>
              <Box mr={"40px"}>
                <Text fontWeight={"600"}>Resources</Text>
                {resourcesData?.map((item: IItem) => (
                  <Text
                    key={item?.id}
                    m={"20px 0px 20px 0px"}
                    fontWeight={"300"}
                  >
                    {item.name}
                  </Text>
                ))}
              </Box>
            </Box>
            <Box mt={"43px"} borderBottom={"0.5px solid #A1A1A1"} />
            <Box mt={"40px"} display={"flex"} justifyContent={"space-between"}>
              <Text>Made with ❤️ by Temidayo & Queennette</Text>
              <Box display={"flex"}>
                {headerData?.map((item: IHeaderLink) => (
                  <HeaderText
                    key={item?.id}
                    name={item?.name}
                    link={item?.link}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

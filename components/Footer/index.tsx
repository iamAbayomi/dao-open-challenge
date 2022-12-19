import { Box, Image, Text } from "@chakra-ui/react";
import { IItem, IHeaderLink } from "../../types";
import { headerData, resourcesData } from "../../utils/dummydata";
import HeaderText from "../HeaderText";

const Footer = () => {
  return (
    <Box pos={"relative"} p={"100px 40px 60px 40px"}>
      <Box
        display={"none"}
        position={"absolute"}
        top={"0px"}
        right={"55%"}
        className={"hide-element"}
      >
        <Box
          position={"absolute"}
          width={"200px"}
          height={"200px"}
          borderRadius={"0px 0px 100px"}
          background={"rgba(255, 122, 0, 0.5)"}
          filter={"blur(30px)"}
          transform={"rotate(25deg)"}
        />
        <Box
          position={"absolute"}
          top={"60px"}
          height={"200px"}
          width={"200px"}
          left={"-115px"}
          borderRadius={"100px"}
          background={"rgba(194, 236, 91, 0.5)"}
          filter={"blur(30px)"}
          transform={"rotate(25deg)"}
        />
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", xl: "row" }}
      >
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
        <Text mt={"90px"} fontWeight={"330"} fontSize={"15px"}>
          The one-stop-shop to find, invest <br /> and vote in extraordinary
          DAOs
        </Text>
        <Box mr={"40px"}>
          <Text fontWeight={"600"}>Resources</Text>
          {resourcesData?.map((item: IItem) => (
            <Text key={item?.id} m={"20px 0px 20px 0px"} fontWeight={"300"}>
              {item.name}
            </Text>
          ))}
        </Box>
      </Box>
      <Box mt={"43px"} borderBottom={"0.5px solid #A1A1A1"} />
      <Box mt={"40px"} display={"flex"} justifyContent={"space-between"}>
        <Text>Made with ❤️ by Temidayo & Queennette</Text>
        <Box display={"flex"} flexDir={{ base: "column", xl: "row" }}>
          {headerData?.map((item: IHeaderLink) => (
            <HeaderText key={item?.id} name={item?.name} link={item?.link} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

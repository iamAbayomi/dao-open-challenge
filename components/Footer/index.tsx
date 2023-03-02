import { Box, Image, Link, Text } from "@chakra-ui/react";

import { IItem, IHeaderLink } from "../../types";
import { headerData, resourcesData, aboutusData } from "../../utils/dummydata";
import HeaderText from "../HeaderText";
import ProductInfoLink from "../Links/ProductInfoLink";

const Footer = () => {
  return (
    <Box
      pos={"relative"}
      p={{ base: "100px 20px 60px 20px", lg: "100px 40px 60px 40px" }}
    >
      <Box
        className="icon-os"
        display={{ base: "none", lm: "block" }}
        position={"absolute"}
        top={"0px"}
        right={"55%"}
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
        flexDir={{ base: "column", md: "row" }}
        margin={"auto"}
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
          <ProductInfoLink>
            <Box mt={"30px"} display={"flex"}>
              <Image
                className="pointer"
                width={"35px"}
                alt={"chat"}
                src={"./chat.svg"}
              />
              <Image
                className="pointer"
                width={"35px"}
                ml={"30px"}
                alt="twitter"
                src="./twitter.svg"
              />
            </Box>
          </ProductInfoLink>
        </Box>
        <Text m={"90px 0px 90px"} fontWeight={"330"} fontSize={"15px"}>
          The one-stop-shop to find, invest <br /> and vote in extraordinary
          DAOs
        </Text>
        <Box mr={"40px"}>
          <Text fontWeight={"600"}>Resources</Text>
          {resourcesData?.map((item: IHeaderLink) => (
            <Link key={item?.id} href={item.link}>
              <Text
                className="pointer"
                m={"20px 0px 20px 0px"}
                fontWeight={"300"}
              >
                {item.name}
              </Text>
            </Link>
          ))}
        </Box>
      </Box>
      <Box mt={"43px"} borderBottom={"0.5px solid #A1A1A1"} />
      <Box
        mt={"40px"}
        display={"flex"}
        justifyContent={"space-between"}
        flexDir={{ base: "column-reverse", sm: "row" }}
        gap={"80px"}
      >
        <Box>
          <Text>
            Made with ❤️ by
            <Link
              href={"https://temidayofolajin.webflow.io/"}
              target={"_blank"}
              mx={"3px"}
            >
              Temidayo,
            </Link>{" "}
            <Link
              href={"https://www.linkedin.com/in/queennettekachi/"}
              target={"_blank"}
              mr={"3px"}
            >
              Queennette
            </Link>
            <Link
              href={"https://www.linkedin.com/in/oladiniabayomi/"}
              target={"_blank"}
              mx={"3px"}
            >
              & Abayomi
            </Link>
          </Text>
        </Box>
        <Box
          display={"flex"}
          gap={"20px"}
          flexDir={{ base: "column", xl: "row" }}
        >
          {headerData?.map((item: IHeaderLink) => (
            <HeaderText key={item?.id} name={item?.name} link={item?.link} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

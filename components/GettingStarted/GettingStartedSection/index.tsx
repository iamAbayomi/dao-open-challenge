import { Box, Button, Image, Input, Text } from "@chakra-ui/react";
import { gettingStartedData } from "../../../utils/dummydata";
import GettingStartedComponent from "../GettingStartedComponent";

const GettingStartedSection = () => {
  return (
    <Box>
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
        <Box
          position={"absolute"}
          left={"0px"}
          height={"200px"}
          width={"100px"}
          borderRadius={"100px"}
          background={"rgba(255, 122, 0, 0.5)"}
          filter={"blur(30px)"}
          transform={"rotate(25deg)"}
        />

        <Text fontWeight={"700"} fontSize={"40px"} textAlign={"center"}>
          Getting Started
        </Text>
        <Box position={"relative"} className={"hide-element"}>
          <Box
            position={"absolute"}
            right={"0px"}
            height={"200px"}
            width={"100px"}
            borderRadius={"100px"}
            background={"rgba(255, 122, 0, 0.5)"}
            filter={"blur(30px)"}
            transform={"rotate(25deg)"}
          />
          <Box
            position={"absolute"}
            top={"100px"}
            right={"0px"}
            width={"170px"}
            height={"200px"}
            background={"rgba(194, 236, 91, 0.5)"}
            filter={"blur(30px)"}
            transform={"rotate(25deg)"}
          />
        </Box>

        <Box margin={"auto"} maxW={"1000px"}>
          {gettingStartedData.map((item, index) => (
            <GettingStartedComponent key={index} text={item} />
          ))}
        </Box>
      </Box>

      <Box
        margin={"275px auto 100px auto"}
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
          flexDir={{ base: "column", xl: "row" }}
          gap={"60px"}
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
    </Box>
  );
};

export default GettingStartedSection;

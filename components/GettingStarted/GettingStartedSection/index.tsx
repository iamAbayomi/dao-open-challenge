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
    </Box>
  );
};

export default GettingStartedSection;

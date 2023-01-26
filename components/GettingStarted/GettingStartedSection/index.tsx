import { Box, Button, Image, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { gettingStartedData } from "../../../utils/dummydata";
import GettingStartedComponent from "../GettingStartedComponent";

const GettingStartedSection = () => {
  const [isSendNewsLetter, setNewsLetter] = useState<boolean>(false);

  function sendNewsLetter() {
    setNewsLetter(true)
    setTimeout(() => {
      setNewsLetter(false);
    }, 3000);
  }

  return (
    <Box position={"relative"}>
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
        <Box display={{ base: "none", sm: "block" }} position={"relative"}>
          <Box>
            <Box
              position={"absolute"}
              right={"0px"}
              height={"200px"}
              width={"100px"}
              maxH={"200px"}
              overflow={"hidden"}
              borderRadius={"100px"}
              background={"rgba(255, 122, 0, 0.5)"}
              filter={"blur(30px)"}
              transform={"rotate(25deg)"}
              border={"1px solid black"}
            />
          </Box>

          <Box maxWidth={"100px"}>
            <Box
              position={"absolute"}
              top={"100px"}
              right={"0px"}
              width={"170px"}
              height={"200px"}
              maxH={"200px"}
              overflow={"hidden"}
              background={"rgba(194, 236, 91, 0.5)"}
              filter={"blur(30px)"}
              transform={"rotate(25deg)"}
            />
          </Box>
        </Box>

        <Box margin={"auto"} maxW={"1000px"}>
          {gettingStartedData.map((item, index) => (
            <GettingStartedComponent key={index} text={item} />
          ))}
        </Box>
      </Box>

      <Box
        pos={"relative"}
        margin={"275px auto 100px auto"}
        maxWidth={"1100px"}
        background={"#C2EC5B"}
        p={{ base: "10px 10px 40px", sm: "60px 60px" }}
        borderRadius={"20px"}
        boxSizing={"border-box"}
      >
        <Box
          m={{ base: "0px 20px", sm: "0px 40px" }}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexDir={{ base: "column", xl: "row" }}
          gap={"60px"}
          zIndex={"200"}
        >
          <Text fontSize={"34px"} fontWeight={"740"}>
            Join our community.
            <br /> Change the world.
          </Text>
          <Box
            display={"flex"}
            flexDir={{ base: "column", xl: "row" }}
            gap={"18px"}
            w={"100%"}
            maxW={{ base: "340px", sm: "max-content" }}
          >
            <Input
              background={"white"}
              w={"100%"}
              maxW={"340px"}
              placeholder={"Your Favourite Email Address"}
              _placeholder={{ fontSize: "12px", color: "#CCCCCC" }}
            />
            <Button
              w={"100%"}
              maxWidth={{ base: "340px", xl: "max-content" }}
              p={"20px 30px 20px 30px"}
              background={"black"}
              _focus={{ background: "black" }}
              _hover={{ background: "black" }}
              color={"white"}
              isLoading={isSendNewsLetter}
              onClick={sendNewsLetter}
            >
              <Text fontSize={"12px"}>Join Newsletter</Text>
            </Button>
          </Box>
        </Box>

        <Box
          opacity={"20%"}
          position={"absolute"}
          top={"0px"}
          left={{ sm: "80%", lg: "38%" }}
          max-width={"94px"}
        >
          <Image width={"94px"} alt="first-vector" src="./gs-f-vector.svg" />
        </Box>
        <Box
          opacity={"20%"}
          position={"absolute"}
          top={"20px"}
          left={{ base: "80%", lg: "48%" }}
        >
          <Image
            max-width={"94px"}
            alt="second-vector"
            src="./gs-s-vector.svg"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default GettingStartedSection;

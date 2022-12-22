import { Box, Text, Image, Input } from "@chakra-ui/react";
import HomeLayout from "../../components/Layout/HomeLayout";
import { alphabetData } from "../../utils/dummydata";

const Index = () => {
  return (
    <HomeLayout>
      <Box p={"50px 60px"} background={"#F6F6F6"}>
        <Box fontWeight={"700"} fontSize={"38px"} display={"flex"} gap={"5px"}>
          <Text color={"#B0B0B0"}>Learn </Text>
          <Text color={"#000000"}> {" > "} Glossary</Text>
        </Box>
        <Box>
          <Box
            mt={"146px"}
            display={"flex"}
            gap={"50px"}
            flexDir={{ base: "column", sm: "row" }}
          >
            <Image alt={"chinese-symbol"} src={"./chinese-symbol.svg"} />
            <Text fontWeight={"700"} fontSize={"3.5rem"}>
              Glossary
            </Text>
          </Box>
          <Text mt={"49px"} fontWeight={"300"} maxWidth={"570px"}>
            There is a high usage of jargon and lingo in the DAO and
            &quot;web3&quot;
            <br /> ecosystems. We&rsquo;re here to assist you in understanding
            everything.
          </Text>
          <Box
            display={"flex"}
            gap={"23px"}
            p={"0px 20px"}
            m={"90px 20px 0px 0px"}
            background={"white"}
            maxWidth={"850px"}
            border={"1px solid #BEBEBE"}
            borderRadius={"20px"}
          >
            <Image alt="search" src={"./search.svg"} />
            <Input
              margin={"20px 0px"}
              _placeholder={{ color: "#BEBEBE" }}
              focusBorderColor={"none"}
              placeholder="Search for Terms & Lingo"
              height={"100%"}
              border={"none"}
            />
          </Box>
          <Box
            m={"54px 0px"}
            display={"grid"}
            gap={"20px"}
            gridColumnGap={"20px"}
            maxWidth={{ sm: "500px", md: "700px", lg: "900px" }}
            gridTemplateColumns={{
              base: "repeat(auto-fill, minmax(50px, 1fr))",
              // md: "repeat(8,minmax(50px, 1fr))",
              xl: "repeat(16, minmax(50px, 1fr))"
            }}
            // gridTemplateColumns={"repeat(auto-fill, minmax(50px, 1fr))"}
            // border={"1px solid black"}
          >
            {alphabetData?.map((item: string, index: number) => (
              <Box
                key={index}
                background={"white"}
                p={"10px 15px"}
                borderRadius={"10px"}
                maxWidth={"max-content"}
                gridTemplateColumns={""}
                border={"1px solid black"}
              >
                <Text fontWeight={"700"}>{item}</Text>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box mt={"95px"}>
        <Box
          display={"flex"}
          alignItems={"start"}
          flexDir={{ base: "column", sm: "row" }}
          flex={"wrap"}
        >
          <Box
            background={"#C2EC5B"}
            p={"29px 90px"}
            maxWidth={"max-content"}
            borderRadius={"10px"}
          >
            <Text fontWeight={"700"} fontSize={"50px"}>
              A
            </Text>
          </Box>

          <Box width={"100%"} maxWidth={"1200px"}>
            {[1, 2, 3, 4, 5].map((item) => (
              <Box
                key={item}
                p={"40px 30px"}
                border={"0.1px solid black"}
                borderRadius={"10px"}
                m={{ base: "50px 30px 50px 30px", sm: "0px 30px 50px 100px" }}
              >
                <Box display={"flex"} gap={"10px"} alignItems={"center"}>
                  <Text fontWeight={"700"} fontSize={"30px"}>
                    Airdrop
                  </Text>
                  <Text>(noun, verb)</Text>
                </Box>
                <Text maxWidth={"800px"}>
                  a marketing technique in which crypto projects send their
                  native tokens directly to the wallets of their users in an
                  effort to increase awareness and adoption. Alpha (noun)
                </Text>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </HomeLayout>
  );
};

export default Index;

import { Box, Text, Image, Input, Link, useRadioGroup } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import GlossaryContainer from "../../components/GlossaryContainer";
import GlossaryRadioButton from "../../components/RadioButton/GlossaryRadioButton";
import HomeLayout from "../../layout/HomeLayout";
import { IGlossaryData, IGlossaryIndex } from "../../types";
import { alphabetData, glossaryData } from "../../utils/dummydata";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const router = useRouter();

  function onRadioButtonChanged(value: string) {
    router.push(`#${value}`);
  }
  const { getRootProps, getRadioProps } = useRadioGroup({
    onChange: onRadioButtonChanged
  });

  function onSearchQuery(event: { target: { value: string } }) {
    setSearchQuery(event.target.value);
  }

  return (
    <HomeLayout isDark={false}>
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
              onChange={onSearchQuery}
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
              xl: "repeat(16, minmax(50px, 1fr))"
            }}
            {...getRootProps()}
          >
            {alphabetData.map((item: string, index: number) => (
              <GlossaryRadioButton
                text={item}
                key={index}
                {...getRadioProps({ value: item })}
              />
            ))}
          </Box>
        </Box>
      </Box>
      <Box mt={"95px"}>
        {glossaryData
          ?.filter((item) => {
            if (searchQuery == "") {
              return item;
            } else if (
              searchQuery[0]?.toLowerCase().includes(item?.index.toLowerCase())
            ) {
              return item;
            }
          })
          ?.map((item: IGlossaryIndex, index: number) => (
            <Box
              key={index}
              display={"flex"}
              alignItems={"start"}
              flexDir={{ base: "column", sm: "row" }}
              flex={"wrap"}
            >
              <Box
                id={item?.index}
                background={"#C2EC5B"}
                p={"29px 90px"}
                maxWidth={"max-content"}
                borderRadius={"10px"}
              >
                <Text fontWeight={"700"} fontSize={"50px"}>
                  {item?.index}
                </Text>
              </Box>

              <Box width={"100%"} maxWidth={"1200px"}>
                {item?.data
                  ?.filter((item) => {
                    if (searchQuery == "") {
                      return item;
                    } else if (
                      item?.title
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                    ) {
                      return item;
                    }
                  })
                  ?.map((item: IGlossaryData, index: number) => (
                    <GlossaryContainer key={index} item={item} />
                  ))}
              </Box>
            </Box>
          ))}
      </Box>
      <Box
        position={"absolute"}
        top={"300px"}
        right={{ base: "50%", sm: "150px" }}
        zIndex={"2000"}
        display={{ base: "none", sm: "block" }}
      >
        <Box
          position={"absolute"}
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
          left={"0px"}
          width={"120px"}
          height={"200px"}
          background={"rgba(194, 236, 91, 0.5)"}
          filter={"blur(30px)"}
          transform={"rotate(25deg)"}
        />
      </Box>
    </HomeLayout>
  );
};

export default Index;

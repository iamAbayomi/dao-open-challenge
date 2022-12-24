import { Box, Button, Text, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { MdArrowForward } from "react-icons/md";
import Badge from "../../components/Badge";
import HomeLayout from "../../layout/HomeLayout";
import RecommendedDaos from "../../components/RecommendedDao";
import { IDaoContainer } from "../../types";
import { hotDaoData, newDaoData } from "../../utils/dummydata";

const Index = () => {
  const Span = styled.span`
    color: #c2ec5b;
  `;
  const recommendDao = hotDaoData.concat(newDaoData);

  return (
    <HomeLayout isDark>
      <Box>
        <Box width={"100%"} background={"black"}>
          <Box
            maxWidth={"700px"}
            margin={"auto"}
            pb={"50px"}
            color={"white"}
            textAlign={"center"}
          >
            <Text fontSize={"200px"}>🎉</Text>
            <Text>Congratualtions , we found the right DAO for you!</Text>
            <Text
              m={"10px 20px 0px"}
              fontFamily={"Maglony"}
              fontWeight={"700"}
              fontSize={"50px"}
            >
              From the entry you submitted,
              <br /> we found out that you’re <Span>Investment</Span>{" "}
              Interested.
            </Text>
            <Button mt={"60px"} p={"25px 45px"} background={"#FF7A00"}>
              <Text m={"10px 10px 10px 0px"} fontWeight={"400"}>
                View Recommendations
              </Text>
              <MdArrowForward />
            </Button>
            <Box
              display={"flex"}
              maxWidth={"max-content"}
              margin={"40px auto 60px"}
            >
              <Image alt="refresh" src="./refresh.svg" />
              <Text ml={"10px"}>Retake Survey</Text>
            </Box>
          </Box>
        </Box>
        <Box
          display={"flex"}
          p={"30px 60px"}
          borderBottom={"0.2px solid #BABABA"}
          justifyContent={"space-between"}
        >
          <Box display={"flex"} gap={"10px"}>
            <Badge item={{ text: "Recommended" }} background={"#c2ec5b"} />
            <Badge item={{ text: "General" }} background={"white"} />
          </Box>
          <Button p={"10px 20px"} background={"#F4F4F4"} borderRadius={"10px"}>
            <Image height={"16px"} alt="share" src="./share.svg" />
            <Text ml={"12px"} fontWeight={"400"} fontSize={"14px"}>
              Share
            </Text>
          </Button>
        </Box>
        <Box
          display={"grid"}
          gridTemplateColumns={"repeat(auto-fit, minmax(300px, 1fr))"}
          margin={"50px auto"}
          maxWidth={{ base: "400px", md: "832px", lg: "1280px" }}
          gap={"30px"}
          rowGap={"40px"}
          p={"20px 40px"}
        >
          {recommendDao?.map((item: IDaoContainer) => (
            <RecommendedDaos key={item?.id} item={item} />
          ))}
        </Box>
      </Box>
    </HomeLayout>
  );
};

export default Index;

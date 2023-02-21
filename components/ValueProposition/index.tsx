import { Box, Button, Text, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { ICategory } from "../../types";
import { category } from "../../utils";
import { useLoadingButton } from "../../utils/helpers";
import Category from "../Category";
import QuickSurvey from "../QuickSurvey";

const ValuePropositon = () => {
  const [showQuickSurvey, setShowQuickSurvey] = useState<boolean>(false);
  const { isLoading, onClick } = useLoadingButton();

  const router = useRouter();

  function toggleShowQuickSurvey() {
    setShowQuickSurvey(!showQuickSurvey);
  }

  return (
    <Box>
      <Box margin={"0px auto 0px "} maxW={"max-content"}>
        <Box>
          <Box>
            <Text
              margin={"122px 0px 0px"}
              fontFamily={"Maglony"}
              fontWeight={"700"}
              fontSize={{ base: "2.75rem", md: "5rem", xl: "8.625rem" }}
              textAlign={"center"}
            >
              All DAO. In ONE.
            </Text>
          </Box>

          <Text
            fontFamily={"Degular"}
            fontWeight={"400"}
            textAlign={"center"}
            p={"0px 20px"}
          >
            Join the OpenDAO Community to discover, invest in, and vote on
            exceptional DAOs. You have the <br />
            power!
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexDir={{ base: "column", sm: "row" }}
          gap={"40px"}
          margin={"60px auto 0px auto"}
          maxWidth={"max-content"}
        >
          <Button
            background={"#C2EC5B"}
            p={"25px 30px"}
            _hover={{ background: "#C2EC5B" }}
            isLoading={isLoading}
            onClick={() => onClick("/explore")}
          >
            <Image alt="explore" src="./explore.svg" />
            <Text ml={"10px"} fontWeight={"400"}>
              Explore DAOs
            </Text>
          </Button>

          <Button
            background={"white"}
            p={"25px 30px"}
            _hover={{ background: "white" }}
            onClick={toggleShowQuickSurvey}
          >
            <Image alt="survey" src="./take-survey.svg" />
            <Text ml={"10px"} fontWeight={"400"}>
              Take Quick Survey
            </Text>
          </Button>
        </Box>

        {showQuickSurvey && <QuickSurvey closeModal={toggleShowQuickSurvey} />}

        <Box
          display={"flex"}
          flexDirection={{ base: "column", xl: "row" }}
          margin={{ base: "170px 10px 0px", xl: "200px auto 0px" }}
          maxWidth={"max-content"}
        >
          <Category item={category[0]} />
          <Box margin={"0px 50px 0px 50px"} borderLeft={"1px solid #A0A0A0"} />
          <Category item={category[1]} />
          <Box margin={"0px 50px 0px 50px"} borderLeft={"1px solid #A0A0A0"} />
          <Category item={category[2]} />
        </Box>
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
    </Box>
  );
};

export default ValuePropositon;

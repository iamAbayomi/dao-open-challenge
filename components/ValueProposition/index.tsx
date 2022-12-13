import { Box, Button, Text, Image } from "@chakra-ui/react";
import { ICategory } from "../../types";
import { category } from "../../utils";
import Category from "../Category";

const ValuePropositon = () => {
  return (
    <Box>
      <Box margin={"0px auto 0px "} maxW={"max-content"}>
        <Box>
          <Box>
            <Text
              margin={"122px 0px 0px"}
              fontFamily={"Malgony"}
              fontWeight={"700"}
              fontSize={"122px"}
              textAlign={"center"}
            >
              All DAO. In ONE.
            </Text>
          </Box>

          <Text fontFamily={"Degular"} fontWeight={"400"} textAlign={"center"}>
            Join the OpenDAO Community to discover, invest in, and vote on
            exceptional DAOs. You have the <br />
            power!
          </Text>
        </Box>
        <Box margin={"60px auto 0px auto"} maxWidth={"max-content"}>
          <Button background={"#C2EC5B"} p={"25px 30px"}>
            <Image alt="explore" src="./explore.svg" />
            <Text ml={"10px"} fontWeight={"400"}>
              Explore DAOs
            </Text>
          </Button>
          <Button ml={"40px"} background={"white"}>
            <Image alt="survey" src="./take-survey.svg" />
            <Text ml={"10px"} fontWeight={"400"}>
              Take Quick Survey
            </Text>
          </Button>
        </Box>

        <Box
          display={"flex"}
          margin={"200px auto 0px"}
          maxWidth={"max-content"}
        >
          <Category item={category[0]} />
          <Box margin={"0px 50px 0px 50px"} borderLeft={"1px solid #A0A0A0"} />
          <Category item={category[1]} />
          <Box margin={"0px 50px 0px 50px"} borderLeft={"1px solid #A0A0A0"} />
          <Category item={category[2]} />
        </Box>
      </Box>
      <Box position={"absolute"} top={"270px"} right={"100px"}>
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

// <Box>
//           <Box
//             position={"fixed"}
//             top={"270px"}
//             right={"0px"}
//             height={"200px"}
//             width={"100px"}
//             borderRadius={"100px"}
//             background={"rgba(255, 122, 0, 0.5)"}
//             filter={"blur(30px)"}
//             transform={"rotate(25deg)"}
//           />
//           <Box
//             position={"fixed"}
//             top={"400px"}
//             right={"20px"}
//             width={"120px"}
//             height={"200px"}
//             background={"rgba(194, 236, 91, 0.5)"}
//             filter={"blur(30px)"}
//             transform={"rotate(25deg)"}
//           />
//         </Box>

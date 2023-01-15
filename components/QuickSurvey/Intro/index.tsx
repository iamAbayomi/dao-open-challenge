import { Box, CloseButton, Text, Button } from "@chakra-ui/react";
import { IoMdArrowForward } from "react-icons/io";

interface Props {
  onClick: () => void;
}

const Intro = ({ onClick }: Props) => {
  return (
    <>
      <CloseButton float={"right"} background={"rgba(217, 217, 217, 0.5)"} />
      <Box margin={"108px 0px 0px"}>
        <Text
          className="clear"
          color={"#000000"}
          fontSize={"38px"}
          fontWeight={"700"}
          textAlign={"center"}
        >
          Take our squick survey, <br />
          so we can find the right DAO for you 🎉
        </Text>
        <Text margin={"32px 0px 0px"} textAlign={"center"} fontWeight={"500"}>
          It won’t take more than 2mins
        </Text>
        <Box maxW={"278px"} margin={"120px auto"}>
          <Button
            width={"100%"}
            p={"26px 0px 26px"}
            background={"#C2EC5B"}
            onClick={onClick}
            _focus={{ background: "#C2EC5B" }}
            _hover={{ background: "#C2EC5B" }}
          >
            <Text mr={"10px"} fontWeight={"400"}>
              Take Survey
            </Text>
            <IoMdArrowForward />
          </Button>
          <Button
            margin={"20px auto 0px"}
            width={"100%"}
            background={"#F8F8F8"}
            fontWeight={"300"}
            fontSize={"14px"}
            _focus={{ background: "#F8F8F8" }}
            _hover={{ background: "#F8F8F8" }}
          >
            No, Thank You
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Intro;

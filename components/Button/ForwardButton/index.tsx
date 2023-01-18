import { Button, Text } from "@chakra-ui/react";
import { IoMdArrowForward } from "react-icons/io";

const ForwardButton = () => {
  return (
    <Button
      p={"22px 50px"}
      background={"#C2EC5B"}
      gap={"14px"}
      _focus={{ bg: "#C2EC5B" }}
      _hover={{ bg: "#C2EC5B" }}
    >
      <Text fontWeight={"400"} fontSize={"14px"}>
        Proceed
      </Text>
      <IoMdArrowForward />
    </Button>
  );
};

export default ForwardButton;

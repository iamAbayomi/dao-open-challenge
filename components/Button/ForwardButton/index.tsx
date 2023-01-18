import { Button, Text } from "@chakra-ui/react";
import { IoMdArrowForward } from "react-icons/io";

interface Props {
  text: string;
  onClick: () => void;
  width?: string;
  padding?: string;
}

const ForwardButton = ({ text, onClick, width, padding }: Props) => {
  return (
    <Button
      width={width ? width : "max-content"}
      p={padding ?? "22px 50px"}
      background={"#C2EC5B"}
      gap={"14px"}
      _focus={{ bg: "#C2EC5B" }}
      _hover={{ bg: "#C2EC5B" }}
      onClick={onClick}
    >
      <Text fontWeight={"400"} fontSize={"14px"}>
        {text}
      </Text>
      <IoMdArrowForward />
    </Button>
  );
};

export default ForwardButton;

import { Button, Text } from "@chakra-ui/react";
import { FiSave } from "react-icons/fi";

interface Props {
  text: string;
}

const WhiteButton = ({ text }: Props) => {
  return (
    <Button
      background={"white"}
      gap={"10px"}
      _focus={{ bg: "white" }}
      _hover={{ bg: "white" }}
    >
      <Text fontWeight={"400"}>{text}</Text>
      <FiSave />
    </Button>
  );
};

export default WhiteButton;

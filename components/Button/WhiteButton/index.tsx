import { Button, Text } from "@chakra-ui/react";
import { FiSave } from "react-icons/fi";

interface Props {
  text: string;
}

const WhiteButton = ({ text }: Props) => {
  return (
    <Button
      background={"none"}
      gap={"10px"}
      _focus={{ bg: "none" }}
      _hover={{ bg: "none" }}
    >
      <Text fontWeight={"400"}>{text}</Text>
      <FiSave />
    </Button>
  );
};

export default WhiteButton;

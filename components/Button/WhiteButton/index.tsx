import { Button, Text } from "@chakra-ui/react";
import { FiSave } from "react-icons/fi";

interface Props {
  text: string;
  onClick: () => void;
}

const WhiteButton = ({ text, onClick }: Props) => {
  return (
    <Button
      background={"none"}
      gap={"10px"}
      _focus={{ bg: "none" }}
      _hover={{ bg: "none" }}
      onClick={onClick}
    >
      <Text fontWeight={"400"}>{text}</Text>
      <FiSave />
    </Button>
  );
};

export default WhiteButton;

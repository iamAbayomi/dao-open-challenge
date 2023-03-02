import { Box, Text, Image } from "@chakra-ui/react";
import { useState } from "react";
import { FiMinus } from "react-icons/fi";
import { ICard } from "../../../types";

interface Props extends ICard {
  text?: string;
}

const GettingStartedComponent = ({
  text = "What is a DAO?",
  title,
  description
}: Props) => {
  const [showDescription, setShowDescription] = useState<boolean>(false);

  function onClick() {
    setShowDescription(!showDescription);
  }

  return (
    <Box
      className={"pointer"}
      backgroundColor={"#F5F5F5"}
      m={"65px 0px 0px 0px"}
      p={"24px 34px 14px 34px"}
      borderRadius={"10px"}
      onClick={onClick}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Text fontWeight={"700"} fontSize={"1.125rem"}>
          {title}
        </Text>
        <Box>
          {!showDescription ? (
            <Image height={"20px"} alt={"plus"} src={"./plus.svg"} />
          ) : (
            <FiMinus size={"38px"} />
          )}
        </Box>
      </Box>
      <Box margin={"20px 0px 0px 0px"}>
        {showDescription && <Text fontWeight={"500"}>{description}</Text>}
      </Box>
    </Box>
  );
};

export default GettingStartedComponent;

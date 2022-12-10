import { Box, Text, Image } from "@chakra-ui/react";
import { ICard, IInfoContainer } from "../../../types";

interface Props {
  item: IInfoContainer;
}

const InfoContainer = ({ item }: Props) => {
  return (
    <Box
      className="info-container"
      maxWidth={"290px"}
      p={"20px"}
      borderRadius={"20px"}
      border={"1px solid #B1B1B1"}
    >
      <Image
        margin={"auto"}
        maxWidth={"52px"}
        alt={"app-logo"}
        src={item?.image}
      />
      <Text
        mb={"20px"}
        textAlign={"center"}
        fontWeight={"700"}
        fontSize={"22px"}
      >
        {item?.title}
      </Text>
      <Text textAlign={"center"} fontWeight={"300"} fontSize={"13px"}>
        {item?.description}
      </Text>
    </Box>
  );
};

export default InfoContainer;

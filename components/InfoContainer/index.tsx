import { Box, Text, Image } from "@chakra-ui/react";
import { ICard, IInfoContainer } from "../../types";

interface Props {
  item: IInfoContainer;
}

const InfoContainer = ({ item }: Props) => {
  return (
    <Box
      className="info-container"
      maxWidth={{ base: "900px", xl: "290px" }}
      width={"100%"}
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
        m={"10px 0px 20px"}
        textAlign={"center"}
        fontWeight={"700"}
        fontSize={"1.5rem"}
      >
        {item?.title}
      </Text>
      <Text textAlign={"center"} fontWeight={"300"} fontSize={"1.25rem"}>
        {item?.description}
      </Text>
    </Box>
  );
};

export default InfoContainer;

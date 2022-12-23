import { Box, Text } from "@chakra-ui/react";
import { IGlossaryData } from "../../types";

interface IProps {
  item: IGlossaryData;
}

const GlossaryContainer = ({ item }: IProps) => {
  return (
    <Box
      p={"40px 30px"}
      border={"0.1px solid black"}
      borderRadius={"10px"}
      m={{ base: "50px 30px 50px 30px", sm: "0px 30px 50px 100px" }}
    >
      <Box display={"flex"} gap={"10px"} alignItems={"center"}>
        <Text fontWeight={"700"} fontSize={"30px"}>
          {item?.title}
        </Text>
        <Text>{item?.tags}</Text>
      </Box>
      <Text maxWidth={"800px"}>{item?.description}</Text>
    </Box>
  );
};

export default GlossaryContainer;

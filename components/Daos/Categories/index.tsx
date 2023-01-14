import { Box, Text } from "@chakra-ui/react";
import { ICategories } from "../../../types";

interface props {
  item: ICategories;
}

const Categories = ({ item }: props) => {
  return (
    <Box
      height={"150px"}
      width={"100%"}
      max-width={"150px"}
      p={"5px 10px"}
      background={item?.background}
      borderRadius={"10px"}
      overflow={"auto"}
    >
      <Text fontWeight={"400"} fontSize={"18px"}>
        {item?.title}
      </Text>
      <Text fontSize={"14px"}>{item?.subtitle}</Text>
    </Box>
  );
};

export default Categories;

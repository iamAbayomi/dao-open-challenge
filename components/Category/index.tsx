import { Box, Image, Text } from "@chakra-ui/react";
import { ICategory } from "../../types";

interface IProps {
  item: ICategory;
}

const Category = ({ item }: IProps) => {
  return (
    <Box
      className="category"
      margin={{ base: "100px 0px 20px 20px", xl: "auto" }}
    >
      <Box display={"flex"}>
        <Image alt="category-title" src={item?.image} />
        <Text ml={"11px"} fontWeight={"700"} fontSize={"1.5rem"}>
          {item?.title}
        </Text>
      </Box>
      <Text
        maxW={{ base: "100%", xl: "260px" }}
        m={"13px 0px 0px 0px"}
        fontSize={{ base: "1.25rem", xl: "0.825rem" }}
        fontWeight={"400"}
        color={"#A0A0A0"}
      >
        {item?.subtitle}
      </Text>
    </Box>
  );
};

export default Category;

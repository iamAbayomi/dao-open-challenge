import { Box, Image, Text } from "@chakra-ui/react";
import { ICategory } from "../../../types";

interface IProps {
  item: ICategory;
}

const Category = ({ item }: IProps) => {
  return (
    <Box className="category">
      <Box display={"flex"}>
        <Image alt="category-title" src={item?.image} />
        <Text ml={"11px"} fontWeight={"700"} fontSize={"24px"}>
          {item?.title}
        </Text>
      </Box>
      <Text
        maxW={"260px"}
        m={"13px 0px 0px 0px"}
        fontSize={"14px"}
        fontWeight={"400"}
        color={"#A0A0A0"}
      >
        {item?.subtitle}
      </Text>
    </Box>
  );
};

export default Category;

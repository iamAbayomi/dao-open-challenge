import { Box, Text, Image } from "@chakra-ui/react";
import { IBadge } from "../../../types";

interface Props {
  item: IBadge;
}

const Badge = ({ item }: Props) => {
  return (
    <Box
      display={"flex"}
      mr={"40px"}
      background={"#FBFBFB"}
      p={"10px 20px"}
      maxWidth={"max-content"}
      border={"1px solid #DBDBDB"}
      borderRadius={"20px"}
    >
      <Image h={"19px"} alt={"image"} src={item?.image} />
      <Text ml={"21px"} fontSize={"14px"} whiteSpace={"nowrap"}>
        {item?.text}
      </Text>
    </Box>
  );
};

export default Badge;

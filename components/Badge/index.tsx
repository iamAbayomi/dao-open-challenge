import { Box, Text, Image } from "@chakra-ui/react";
import { IBadge } from "../../types";

interface Props {
  item: IBadge;
  background?: string;
  textColor?: string;
  isRowReverse?: boolean;
}

const Badge = ({ item, background, textColor, isRowReverse }: Props) => {
  return (
    <Box
      display={"flex"}
      gap={"21px"}
      flexDirection={isRowReverse ? "row-reverse" : "row"}
      background={background ? background : "#FBFBFB"}
      p={"10px 20px"}
      maxWidth={"max-content"}
      border={"1px solid #DBDBDB"}
      borderRadius={"20px"}
    >
      {item?.image && <Image h={"19px"} alt={"image"} src={item?.image} />}
      <Text fontSize={"14px"} color={textColor} whiteSpace={"nowrap"}>
        {item?.text}
      </Text>
    </Box>
  );
};

export default Badge;

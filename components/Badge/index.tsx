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
      gap={"1.31rem"}
      flexDirection={isRowReverse ? "row-reverse" : "row"}
      background={background ? background : "#FBFBFB"}
      p={"0.625rem 1.25rem"}
      maxWidth={"max-content"}
      border={"1px solid #DBDBDB"}
      borderRadius={"1.25rem"}
    >
      {item?.image && <Image h={"1.19rem"} alt={"image"} src={item?.image} />}
      <Text fontSize={"0.875rem"} color={textColor} whiteSpace={"nowrap"}>
        {item?.text}
      </Text>
    </Box>
  );
};

export default Badge;

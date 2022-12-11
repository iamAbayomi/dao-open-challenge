import { Box, Text, Image } from "@chakra-ui/react";
import { IBadge } from "../../types";

interface Props {
  item: IBadge;
  background?: string;
  textColor?: string;
}

const Badge = ({ item, background, textColor }: Props) => {
  return (
    <Box
      display={"flex"}
      mr={"40px"}
      background={background ? background : "#FBFBFB"}
      p={"10px 20px"}
      maxWidth={"max-content"}
      border={"1px solid #DBDBDB"}
      borderRadius={"20px"}
    >
      {item?.image && (
        <Image mr={"21px"} h={"19px"} alt={"image"} src={item?.image} />
      )}
      <Text fontSize={"14px"} color={textColor} whiteSpace={"nowrap"}>
        {item?.text}
      </Text>
    </Box>
  );
};

export default Badge;

import { Box, Text, Image } from "@chakra-ui/react";

interface Props {
  image: string;
  text: string;
}

const Badge = ({ image, text }: Props) => {
  return (
    <Box
      background={"#FBFBFB"}
      p={"10px 20px"}
      border={"1px solid #DBDBDB"}
      borderRadius={"20px"}
    >
      <Image alt={"image"} src={image} />
      <Text>{text}</Text>
    </Box>
  );
};

export default Badge;

import { Box, Text } from "@chakra-ui/react";

type Props = {
  text: string;
  color: string;
};

const Tags = ({ text, color }: Props) => {
  return (
    <Box
      maxWidth={"max-content"}
      mr={"39px"}
      p={"5px 10px"}
      borderRadius={"5px"}
      background={color}
    >
      <Text fontWeight={"400"}>{text}</Text>
    </Box>
  );
};

export default Tags;

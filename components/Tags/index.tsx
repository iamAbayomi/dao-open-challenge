import { Box, Text } from "@chakra-ui/react";

type Props = {
  text: string;
  color: string;
};

const Tags = ({ text, color }: Props) => {
  return (
    <Box
      className="tags"
      maxWidth={"max-content"}
      p={"5px 10px"}
      borderRadius={"5px"}
      background={color}
    >
      <Text fontSize={"14px"} fontWeight={"400"}>
        {text}
      </Text>
    </Box>
  );
};

export default Tags;

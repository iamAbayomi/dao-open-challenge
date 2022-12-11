import { Box, Text } from "@chakra-ui/react";

type Props = {
  text: string;
  color: string;
  border?: string;
  borderRadius?: string;
};

const Tags = ({ text, color, border, borderRadius }: Props) => {
  return (
    <Box
      className="tags"
      maxWidth={"max-content"}
      p={"2px 25px"}
      borderRadius={borderRadius ? borderRadius : "5px"}
      background={color}
      border={border}
    >
      <Text fontSize={"14px"} fontWeight={"400"}>
        {text}
      </Text>
    </Box>
  );
};

export default Tags;

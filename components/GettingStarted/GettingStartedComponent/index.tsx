import { Box, Text, Image } from "@chakra-ui/react";

type Props = {
  text: string;
};

const GettingStartedComponent = ({ text = "What is a DAO?" }: Props) => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      backgroundColor={"#F5F5F5"}
      m={"65px 0px 0px 0px"}
      p={"24px 34px 24px 34px"}
      borderRadius={"10px"}
    >
      <Text fontWeight={"700"} fontSize={"18px"}>
        {text}
      </Text>
      <Image height={"20px"} alt={"plus"} src={"./plus.svg"} />
    </Box>
  );
};

export default GettingStartedComponent;

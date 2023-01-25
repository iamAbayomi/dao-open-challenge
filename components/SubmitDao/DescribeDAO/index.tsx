import { Box, Text, Input, Textarea, Button } from "@chakra-ui/react";
import { MdArrowForward } from "react-icons/md";

const DescribeDAO = () => {
  return (
    <Box mt={"40px"}>
      <Box
        top={"-12px"}
        right={"-90px"}
        w={"264px"}
        h={"264px"}
        borderRadius={"200px"}
        position={"absolute"}
        filter={"blur(86.5px)"}
        bg={"rgba(255, 122, 0, 0.2)"}
        transform={"rotate(-5.22deg)"}
      />
      <Text fontSize={"18px"} fontWeight={"700"}>
        Describe your DAO
      </Text>
      <Text mt={"5px"} color={"#9F9F9F"}>
        Share your mission statement with us. Maximum 280 characters
      </Text>
      <Textarea bg={"#F2F2F2"} mt={"20px"} width={"100%"} height={"300px"} />
    </Box>
  );
};

export default DescribeDAO;

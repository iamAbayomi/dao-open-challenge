import { Box, Text, Input, Textarea, Button } from "@chakra-ui/react";
import { MdArrowForward } from "react-icons/md";

const DescribeDAO = () => {
  return (
    <Box mt={"40px"}>
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

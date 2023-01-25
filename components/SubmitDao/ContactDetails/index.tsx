import { Box, Button, Input, Select, Text } from "@chakra-ui/react";
import { MdArrowForward } from "react-icons/md";

const ContactDetails = () => {
  return (
    <>
      <Box mt={"50px"}>
        <Text fontSize={"18px"} fontWeight={"700"}>
          Provide your Contact Details
        </Text>
        <Text mt={"5px"} color={"#9F9F9F"}>
          Please provide us with your contact details
        </Text>
        <Input
          height={"51px"}
          mt={"10px"}
          bg={"#F2F2F2"}
          placeholder={"Ex. contact@opendao.org"}
        />
        <Box
          top={"82px"}
          right={"-90px"}
          w={"264px"}
          h={"264px"}
          borderRadius={"200px"}
          position={"absolute"}
          filter={"blur(86.5px)"}
          bg={" rgba(194, 236, 91, 0.2)"}
          transform={"rotate(-5.22deg)"}
        />
      </Box>
    </>
  );
};

export default ContactDetails;

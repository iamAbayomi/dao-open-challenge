import { Box, Text, Input, Select, Button } from "@chakra-ui/react";
import { MdArrowForward } from "react-icons/md";

const ProfileHandles = () => {
  return (
    <Box>
      <Box mt={"60px"}>
        <Text fontSize={"18px"} fontWeight={"700"}>
          Twitter Profile
        </Text>
        <Input
          height={"51px"}
          mt={"10px"}
          bg={"#F2F2F2"}
          placeholder={"Ex. OpenDAO"}
        />
      </Box>
      <Box mt={"35px"}>
        <Text fontSize={"18px"} fontWeight={"700"}>
          Discord Profile
        </Text>
        <Select
          height={"51px"}
          mt={"10px"}
          bg={"#F2F2F2"}
          placeholder={"Select your DAO category"}
          _placeholder={{ color: "#9F9F9F" }}
          color={"#9F9F9F"}
        ></Select>
      </Box>
      <Box mt={"35px"}>
        <Text fontSize={"18px"} fontWeight={"700"}>
          DAO Website
        </Text>
        <Select
          height={"51px"}
          mt={"10px"}
          bg={"#F2F2F2"}
          placeholder={"Select your DAO category"}
          _placeholder={{ color: "#9F9F9F" }}
          color={"#9F9F9F"}
        ></Select>
      </Box>
      <Button
        mt={"60px"}
        bg={"#C2EC5B"}
        p={"25px 40px 25px 40px"}
        display={"flex"}
        gap={"5"}
      >
        <Text>Proceed</Text>
        <MdArrowForward />
      </Button>
    </Box>
  );
};

export default ProfileHandles;

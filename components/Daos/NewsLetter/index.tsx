import { Box, Text, Input, Image } from "@chakra-ui/react";

const NewsLetter = () => {
  return (
    <Box>
      <Box mt={"57px"}>
        <Text color={"#A3A3A3"}>NEWSLETTER</Text>
        <Box
          mt={"32px"}
          p={"31px 31px"}
          background={"#C2EC5B"}
          borderRadius={"20px"}
        >
          <Text fontWeight={"700"} fontSize={"28px"}>
            Sign Up for Alerts
          </Text>
          <Text fontWeight={"300"} mt={"21px"} maxW={"300px"} fontSize={"14px"}>
            The DAO Weekly Newsletter includes updates regarding proposals
          </Text>
          <Box display={"flex"} mt={"41px"}>
            <Input background={"white"} placeholder="Email for Alert" />
            <Box background={"black"} p={"15px 25px"} borderRadius={"10px"}>
              <Image alt={"messenger"} src={"./sendMessage.svg"} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NewsLetter;

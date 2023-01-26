import { Box, Input, Text, Textarea } from "@chakra-ui/react";

const ProposalDetails = () => {
  return (
    <Box>
      <Box mt={"60px"}>
        <Text fontSize={"18px"} fontWeight={"400"}>
          Proposal Title
        </Text>
        <Input
          height={"51px"}
          mt={"10px"}
          bg={"#F2F2F2"}
          border={"1px solid #CACACA"}
          placeholder={"Ex. Allow Custom Minting Fees"}
          _placeholder={{ fontSize: "14px", color: "#A9A9A9" }}
        />
      </Box>
      <Box mt={"60px"}>
        <Box
          display={"flex"}
          alignItems={{ base: "start", sm: "center" }}
          justifyContent={"space-between"}
          flexDir={{ base: "column", sm: "row" }}
          gap={"30px"}
        >
          <Box>
            <Text>Proposal Description</Text>
            <Text fontWeight={"400"} fontSize={"12px"}>
              Disclaimer : Let your proposal description be descriptive as
              possible.
            </Text>
          </Box>
          <Box
            width={"53px"}
            height={"53px"}
            border={"4px solid #439F6E"}
            borderRadius={"53px"}
          >
            <Text
              margin={"12px auto"}
              fontWeight={"700"}
              fontSize={"12px"}
              textAlign={"center"}
            >
              2000
            </Text>
          </Box>
        </Box>
        <Textarea bg={"#F2F2F2"} mt={"20px"} width={"100%"} height={"250px"} />
      </Box>
    </Box>
  );
};

export default ProposalDetails;

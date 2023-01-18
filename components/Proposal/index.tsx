import { Box, Text, Input, Textarea } from "@chakra-ui/react";
import Modal from "../Modal";

const Proposal = () => {
  return (
    <Modal onClose={() => {}}>
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
            alignItems={"center"}
            justifyContent={"space-between"}
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
          <Textarea
            bg={"#F2F2F2"}
            mt={"20px"}
            width={"100%"}
            height={"250px"}
          />
        </Box>
      </Box>
    </Modal>
  );
};

export default Proposal;

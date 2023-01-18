import { Box, Text, Select } from "@chakra-ui/react";
import UploadDetails from "../../SubmitDao/UploadDetails";

const ProposalCategory = () => {
  return (
    <Box>
      <Box mt={"60px"}>
        <Text fontSize={"18px"} fontWeight={"400"}>
          Proposal Category
        </Text>
        <Select
          height={"51px"}
          mt={"10px"}
          bg={"#F2F2F2"}
          placeholder={"Select Proposal Category"}
          fontSize={"14px"}
          _placeholder={{ fontSize: "12px", color: "#9F9F9F" }}
          color={"#9F9F9F"}
          fontWeight={"400"}
        ></Select>
      </Box>
      <UploadDetails isProposal={true} />
    </Box>
  );
};

export default ProposalCategory;

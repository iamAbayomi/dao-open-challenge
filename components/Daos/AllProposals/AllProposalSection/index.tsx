import { Box, Text } from "@chakra-ui/react";
import AllProposalContainer from "../AllProposalContainer";

const AllProposalSection = () => {
  return (
    <Box width={"100%"} maxW={"950px"}>
      <Text mb={"42px"} color={"#A3A3A3"}>
        All proposals - 1277
      </Text>
      {[1, 2, 3, 4, 5].map((item) => (
        <AllProposalContainer key={item} />
      ))}{" "}
    </Box>
  );
};

export default AllProposalSection;

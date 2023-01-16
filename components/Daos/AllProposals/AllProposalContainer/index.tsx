import { Box, Text } from "@chakra-ui/react";
import Tags from "../../../Tags";

const AllProposalContainer = () => {
  return (
    <Box
      background={"#FAFAFA"}
      p={"20px 30px"}
      border={"1px solid #DADADA"}
      borderRadius={"15px"}
      boxSizing={"border-box"}
      mb={"30px"}
    >
      <Box
        display={"flex"}
        gap={"20px"}
        justifyContent={"space-between"}
        alignItems={"baseline"}
        flexDir={{ base: "column", lg: "row" }}
      >
        <Box>
          <Text fontWeight={"600"} fontSize={"18px"}>
            Allow Custom Minting Amounts
          </Text>
          <Text
            mt={"15px"}
            maxWidth={"500px"}
            fontWeight={"300"}
            fontSize={"13px"}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
            purus volutpat augue urna. Dolor adipiscing consectetur amet ipsum
            aliquet dignissim.
          </Text>
        </Box>
        <Tags
          text={"3 Days Left"}
          color={"rgba(249, 238, 139, 0.73)"}
          borderRadius={"10px"}
        />
      </Box>

      <Box mt={"23px"} border={"0.1px solid #C6C6C6"} />
      <Box mt={"22px"} display={"flex"} gap={"20px"}>
        <Tags
          text={"Active"}
          color={""}
          border={"1px solid #000000"}
          borderRadius={"10px"}
        />
        <Tags text={"Minion"} color={"#FF8686"} borderRadius={"10px"} />
      </Box>
    </Box>
  );
};

export default AllProposalContainer;

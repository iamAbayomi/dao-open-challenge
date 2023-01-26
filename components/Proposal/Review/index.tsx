import { Box, Text, Image } from "@chakra-ui/react";

const Review = () => {
  return (
    <Box
      background={"white"}
      margin={"45px 0px"}
      p={"44px 53px"}
      borderRadius={"20px"}
    >
      <Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Text fontWeight={"700"} fontSize={"14px"}>
            Proposal Title
          </Text>
          <Text color={"#F93232"}>Edit</Text>
        </Box>
        <Text>Allow Custom Minting Fee</Text>
      </Box>

      <Box mt={"54px"}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Text fontWeight={"700"} fontSize={"14px"}>
            Proposal Title
          </Text>

          <Text color={"#F93232"}>Edit</Text>
        </Box>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget eget
          quam aliquam sem ac elementum eu nulla. Sapien venenatis, malesuada
          tempor interdum condimentum in sed. Netus arcu elit facilisis tortor
          enim, vitae.
        </Text>
      </Box>
      <Box margin={"54px 0px 0px 0px"}>
        <Text fontWeight={"700"} fontSize={"14px"}>
          Proposal Title
        </Text>
        <Box
          mt={"11px"}
          background={"#F5F5F5"}
          padding={"10px 32px 10px 10px"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={{ base: "center", sm: "center" }}
          flexDir={{ base: "column", sm: "row" }}
          borderRadius={"10px"}
          gap={"30px"}
        >
          <Box
            display={"flex"}
            alignItems={{ base: "center", sm: "center" }}
            flexDir={{ base: "column", sm: "row" }}
            gap={"30px"}
          >
            <Image alt={""} src={"./review-image.jpg"} />
            <Box>
              <Text>Image98.png</Text>
              <Text>98kb</Text>
            </Box>
          </Box>

          <Text fontSize={"14px"}>Change Image</Text>
        </Box>
      </Box>

      <Box margin={"54px 0px 0px 0px"}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Text fontWeight={"700"} fontSize={"14px"}>
            Proposal Category
          </Text>
          <Text color={"#F93232"}>Edit</Text>
        </Box>
        <Text>Minion</Text>
      </Box>
    </Box>
  );
};

export default Review;

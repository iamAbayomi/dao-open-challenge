import { Box, Text, Image, Button } from "@chakra-ui/react";
import { MdArrowForward } from "react-icons/md";

const UploadDetails = () => {
  return (
    <Box>
      <Box>
        <Text
          fontSize={"20px"}
          mt={"81px"}
          fontStyle={"bold"}
          fontWeight={"700"}
        >
          Upload Proposal Image
        </Text>
        <Text fontSize={"16px"}>
          Only PNG, JPEG and GIF formats are supported
        </Text>
      </Box>
      <Box
        mt={"50px"}
        display={"flex"}
        gap={"20"}
        justifyContent={"space-between"}
      >
        <Box
          background={"#F2F2F2"}
          flexGrow={"3"}
          border={"1px dashed #CACACA"}
          p={"50px"}
          borderRadius={"10px"}
        >
          <Image margin={"auto"} alt={"image-plus"} src={"./image-plus.svg"} />
          <Text fontSize={"14px"} textAlign={"center"}>
            Drag and Drop Image here or Browse
          </Text>
        </Box>
        <Box
          background={"#F2F2F2"}
          flexGrow={"1"}
          p={"50px"}
          borderRadius={"10px"}
        >
          <Image
            margin={"auto"}
            alt={"image-unsplash.svg"}
            src={"./image-unsplash.svg"}
          />
          <Text fontSize={"14px"} textAlign={"center"}>
            Choose Image from Unsplash
          </Text>
        </Box>
      </Box>
      <Button
        mt={"100px"}
        bg={"#C2EC5B"}
        p={"25px 40px 25px 40px"}
        display={"flex"}
        gap={"5"}
      >
        <Text>Submit</Text>
        <MdArrowForward />
      </Button>
    </Box>
  );
};

export default UploadDetails;

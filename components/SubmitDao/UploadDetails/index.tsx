import { Box, Text, Image, Button } from "@chakra-ui/react";
import { MdArrowForward } from "react-icons/md";

interface Props {
  isProposal?: boolean;
}

const UploadDetails = ({ isProposal }: Props) => {
  return (
    <Box>
      <Box>
        <Text
          fontSize={isProposal ? "18px" : "20px"}
          mt={isProposal ? "60px" : "81px"}
          fontStyle={"bold"}
          fontWeight={isProposal ? "400" : "700"}
        >
          Upload Proposal Image
        </Text>
        <Text fontSize={isProposal ? "12px" : "16px"}>
          Only PNG, JPEG and GIF formats are supported
        </Text>
      </Box>
      <Box
        mt={isProposal ? "20px" : "50px"}
        display={"flex"}
        alignItems={"center"}
        gap={"25px"}
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
        {isProposal ? <Text>Or</Text> : <></>}
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
    </Box>
  );
};

export default UploadDetails;

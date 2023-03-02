import { Box, Button, CloseButton, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { IoMdArrowForward } from "react-icons/io";
import { useLoadingButton } from "../../../utils/helpers";

interface props {
  closeModal?: () => void;
  onClickClose: () => void;
}

const FinalPage = ({ closeModal, onClickClose }: props) => {
  const router = useRouter();
  const { isLoading, onClick } = useLoadingButton();

  function viewRecommendadDaos() {
    router.push("/recommendedDaos");
  }

  function resetState() {
    onClickClose();
  }
  return (
    <Box p={{ base: "23px 10px 0px 10px", sm: "23px 20px 27px 23px" }}>
      <CloseButton
        onClick={resetState}
        float={"right"}
        background={"rgba(217, 217, 217, 0.5)"}
      />
      <Box mt={"66px"} p={""}>
        <Text textAlign={"center"} fontSize={"140px"}>
          🎉
        </Text>
        <Text margin={"auto"} textAlign={"center"} maxWidth={"408px"}>
          Congratulations, you have sucessfully filled our survey! Check out the
          recommended DAOs
        </Text>
        <Box margin={"80px auto 0px"} maxWidth={"250px"}>
          <Button
            display={"flex"}
            p={"26px"}
            gap={"10px"}
            background={"black"}
            color={"white"}
            width={"100%"}
            _hover={{ background: "black" }}
            _focus={{ background: "black" }}
            onClick={() => onClick("/recommendedDaos")}
            isLoading={isLoading}
          >
            <Text fontSize={"14px"} fontWeight={"300"}>
              View Recommended DAOs
            </Text>
            <IoMdArrowForward size={"16px"} fontWeight={"400"} />
          </Button>
          <Button
            marginTop={"20px"}
            display={"block"}
            width={"100%"}
            background={"transparent"}
            fontSize={"14px"}
            fontWeight={"300"}
            _focus={{ background: "transparent" }}
            _hover={{ background: "transparent" }}
            onClick={onClickClose}
          >
            Retake Survey
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FinalPage;

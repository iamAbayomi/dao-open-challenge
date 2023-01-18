import { Box, Button, CloseButton, Text } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { MdClose } from "react-icons/md";
import ForwardButton from "../Button/ForwardButton";
import WhiteButton from "../Button/WhiteButton";

interface IProps {
  onClose: () => void;
  children: ReactNode;
}
const Modal = ({ onClose, children }: IProps) => {
  const [step, setStep] = useState<number>(0);

  function nextButton() {
    setStep(step + 1);
  }

  return (
    <Box
      position={"fixed"}
      top={"0px"}
      left={"0px"}
      background={"rgba(27, 31, 36, 0.5)"}
      width={"100%"}
      height={"100%"}
    >
      <Box
        background={"white"}
        width={"100%"}
        height={"700px"}
        maxW={"900px"}
        margin={"5vh auto 0px"}
        p={"50px 80px 40px 60px"}
        borderRadius={"10px"}
        overflowY={"scroll"}
      >
        <Box display={"flex"} justifyContent={"space-between"}>
          <Text fontSize={"38px"} fontWeight={"700"}>
            Create New Proposal
          </Text>
          <CloseButton onClick={onClose} />
        </Box>

        <Box display={"flex"} gap={"5"} mt={"70px"}>
          <Box>
            <Box
              width={"251px"}
              height={"9px"}
              background={"#E2E2E2"}
              transform={"rotate(-180deg)"}
              bg={"rgba(255, 122, 0, 0.33)"}
            />
            <Text mt={"5px"} fontWeight={"400"}>
              Proposal Details
            </Text>
          </Box>
          <Box>
            <Box
              width={"251px"}
              height={"9px"}
              background={step === 2 ? "rgba(255, 122, 0, 0.66)" : "#E2E2E2"}
              transform={"skew(-20deg)"}
              borderRadius={"2px"}
            />{" "}
            <Text mt={"5px"} fontWeight={"400"}>
              Proposal Category
            </Text>
          </Box>
          <Box>
            <Box
              width={"251px"}
              height={"9px"}
              background={step === 3 ? "#FF7A00" : "#E2E2E2"}
              transform={"skew(-20deg)"}
            />
            <Text mt={"5px"} fontWeight={"400"}>
              Review
            </Text>
          </Box>
        </Box>
        <Box>{children}</Box>

        <Box display={"flex"} mt={"80px"} alignItems={"center"} gap={"30px"}>
          <ForwardButton />
          <WhiteButton text="Save Draft" />
        </Box>
      </Box>
    </Box>
  );
};

export default Modal;

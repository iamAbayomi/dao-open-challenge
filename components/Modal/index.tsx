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
  return (
    <Box
      position={"fixed"}
      top={"0px"}
      left={"0px"}
      background={"rgba(27, 31, 36, 0.5)"}
      width={"100%"}
      height={"100%"}
      zIndex={"1000"}
    >
      <Box
        width={"100%"}
        height={"700px"}
        maxW={"900px"}
        margin={"5vh auto 0px"}
        borderRadius={"10px"}
        overflowY={"scroll"}
        onClick={() => {}}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Modal;

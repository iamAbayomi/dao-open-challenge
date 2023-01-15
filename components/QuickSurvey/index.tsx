import { Box, Button, Text, Image, CloseButton } from "@chakra-ui/react";
import { useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import Intro from "./Intro";
import PersonalGoals from "./PersonalGoals";

interface Props {
  closeModal: () => void;
}

const QuickSurvey = ({ closeModal }: Props) => {
  const [step, setStep] = useState<number>(1);

  return (
    <Box
      pos={"fixed"}
      top={"0px"}
      left={"0px"}
      background={"rgba(27, 31, 36, 0.5)"}
      height={"100%"}
      width={"100%"}
      zIndex={"2000"}
      p={"20px"}
    >
      <Box
        width={"100%"}
        maxW={"1000px"}
        background={"#F8F8F8"}
        boxShadow={"0 4px 8px 0 rgba(0,0,0,0.2)"}
        height={"680px"}
        margin={"40px auto"}
        p={"25px 29px"}
        border={"1px solid #A2A0A0"}
        borderRadius={"10px"}
        overflow={"scroll"}
      >
        {step == 1 ? (
          <Intro onClick={() => setStep(2)} closeModal={closeModal} />
        ) : (
          <PersonalGoals closeModal={closeModal} />
        )}
      </Box>
    </Box>
  );
};

export default QuickSurvey;

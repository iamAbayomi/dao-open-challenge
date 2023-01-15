import { Box, Button, Text, Image, CloseButton } from "@chakra-ui/react";
import { useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import Intro from "./Intro";
import PersonalGoals from "./PersonalGoals";

const QuickSurvey = () => {
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
    >
      <Box
        width={"1000px"}
        background={"#F8F8F8"}
        boxShadow={"0 4px 8px 0 rgba(0,0,0,0.2)"}
        height={"680px"}
        margin={"70px auto"}
        p={"25px 29px"}
        border={"1px solid #A2A0A0"}
        borderRadius={"10px"}
      >
        {step == 1 ? <Intro onClick={() => setStep(2)} /> : <PersonalGoals />}
      </Box>
    </Box>
  );
};

export default QuickSurvey;

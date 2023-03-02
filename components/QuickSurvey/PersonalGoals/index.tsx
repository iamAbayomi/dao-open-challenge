import {
  Box,
  Button,
  CloseButton,
  Text,
  useCheckboxGroup
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import {
  personalGoalData
} from "../../../utils/dummydata";
import ButtonCheckbox from "../../ButtonCheckbox";
import MemberDAOs from "./MemberDAOs";
import MostInterested from "./MostInterested";

const Span = styled.span`
  color: #ff7a00;
`;

interface Props {
  changeStep: () => void;
  closeModal: () => void;
}

const PersonalGoals = ({ changeStep, closeModal }: Props) => {
  const { getCheckboxProps } = useCheckboxGroup({
    defaultValue: ["0"]
  });
  const [step, setStep] = useState<number>(1);

  function resetState() {
    setStep(1);
    // closeModal();
    changeStep();
    console.log("close Modal");
  }

  const Title = () => {
    return (
      <Text m={"51px 0px 110px"} fontSize={"38px"} fontWeight={"700"}>
        {step == 1 ? (
          <>
            What are your personal goal <br /> with <Span>DAOs?</Span>
          </>
        ) : step == 2 ? (
          <>What are you most interested in? </>
        ) : (
          <>
            Are you currently a member of any <Span>DAOs?</Span>
          </>
        )}
      </Text>
    );
  };
  return (
    <Box p={{ base: "23px 10px 0px 10px", sm: "23px 60px 27px 53px" }}>
      <Text>Step {step}/3</Text>
      <CloseButton
        onClick={resetState}
        float={"right"}
        background={"rgba(217, 217, 217, 0.5)"}
      />
      <Box className="clear">
        <Title />
        <Box
          display={"grid"}
          gridTemplateColumns={"repeat(auto-fit, minmax(200px, 1fr))"}
          gap={"50px"}
        >
          {step === 1 ? (
            personalGoalData?.map((item: string, index: number) => (
              <ButtonCheckbox
                key={index}
                buttonText={item}
                checkBoxProps={getCheckboxProps}
              />
            ))
          ) : step == 2 ? (
            <MostInterested />
          ) : (
            <MemberDAOs />
          )}
        </Box>
        <Box
          m={"91px 0px 0px"}
          display={"flex"}
          gap={"41px"}
          alignItems={"center"}
          flexDir={{ base: "column", sm: "row" }}
        >
          <Button
            background={"#C2EC5B"}
            _focus={{ background: "#C2EC5B" }}
            _hover={{ background: "#C2EC5B" }}
            p={"26px 32px 26px 32px"}
            onClick={step !== 3 ? () => setStep(step + 1) : resetState}
          >
            <Text fontSize={"14px"} fontWeight={"400"} mr={"10px"}>
              {step !== 3 ? "Next" : "Finish"}
            </Text>
            <IoMdArrowForward size={"16px"} fontWeight={"400"} />
          </Button>
          {step !== 3 && (
            <Text fontSize={"14px"} className={"pointer"} onClick={resetState}>
              Ask Me Later
            </Text>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default PersonalGoals;

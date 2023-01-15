import {
  Box,
  Button,
  CloseButton,
  Text,
  useCheckbox,
  useCheckboxGroup
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import Example from "../../../pages/test";
import {
  interestData,
  memberData,
  personalGoalData
} from "../../../utils/dummydata";
import ButtonCheckbox from "../../ButtonCheckbox";
import MemberDAOs from "./MemberDAOs";
import MostInterested from "./MostInterested";

const Span = styled.span`
  color: #ff7a00;
`;

const PersonalGoals = () => {
  const { getCheckboxProps } = useCheckboxGroup({
    defaultValue: ["0"]
  });
  const [step, setStep] = useState<number>(1);

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

  const data: string[] =
    step === 1 ? personalGoalData : step === 2 ? interestData : memberData;

  return (
    <Box p={"23px 60px 27px 53px"}>
      <Text>Step {step}/3</Text>
      <CloseButton float={"right"} background={"rgba(217, 217, 217, 0.5)"} />
      <Box className="clear">
        <Title />
        <Box
          display={"grid"}
          gridTemplateColumns={"auto auto auto"}
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
        <Box m={"91px 0px 0px"} display={"flex"} alignItems={"center"}>
          <Button
            background={"#C2EC5B"}
            _focus={{ background: "#C2EC5B" }}
            _hover={{ background: "#C2EC5B" }}
            p={"26px 32px 26px 32px"}
            onClick={step !== 3 ? () => setStep(step + 1) : () => setStep(1)}
          >
            <Text fontSize={"14px"} fontWeight={"400"} mr={"10px"}>
              {step !== 3 ? "Next" : "Finish"}
            </Text>
            <IoMdArrowForward size={"16px"} fontWeight={"400"} />
          </Button>
          <Text fontSize={"14px"} ml={"43px"}>
            Ask Me Later
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default PersonalGoals;

import { Box, CloseButton, Text } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import ForwardButton from "../Button/ForwardButton";
import WhiteButton from "../Button/WhiteButton";
import Modal from "../Modal";
import ProposalCategory from "./ProposalCategory";
import ProposalDetails from "./ProposalDetails";
import Review from "./Review";
interface IProps {
  onClose: () => void;
}

const Proposal = ({ onClose }: IProps) => {
  const [step, setStep] = useState<number>(1);

  return (
    <Modal onClose={onClose}>
      <Box backgroundColor={" #F8F8F8"} p={"50px 80px 40px 60px"}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Text fontSize={"38px"} fontWeight={"700"}>
            Create New Proposal
          </Text>
          <CloseButton
            background={" rgba(217, 217, 217, 0.5)"}
            onClick={onClose}
          />
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
            <Text mt={"5px"} fontSize={"13px"} fontWeight={"400"}>
              Proposal Details
            </Text>
          </Box>
          <Box>
            <Box
              width={"251px"}
              height={"9px"}
              background={step !== 1 ? "rgba(255, 122, 0, 0.66)" : "#E2E2E2"}
              transform={"skew(-20deg)"}
              borderRadius={"2px"}
            />{" "}
            <Text mt={"5px"} fontSize={"13px"} fontWeight={"400"}>
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
            <Text mt={"5px"} fontSize={"13px"} fontWeight={"400"}>
              Review
            </Text>
          </Box>
        </Box>
        <Box>
          {step === 1 ? (
            <ProposalDetails />
          ) : step === 2 ? (
            <ProposalCategory />
          ) : (
            <Review />
          )}
        </Box>

        {step !== 3 ? (
          <Box display={"flex"} mt={"80px"} alignItems={"center"} gap={"30px"}>
            <ForwardButton
              text="Proceed"
              onClick={step !== 3 ? () => setStep(step + 1) : onClose}
            />
            <WhiteButton text="Save Draft" onClick={onClose} />
          </Box>
        ) : (
          <Box margin={"45px auto "} w={"100%"} maxW={"200px"}>
            <ForwardButton
              width="100%"
              padding="26px 10px"
              text="Submit"
              onClick={onClose}
            />
          </Box>
        )}
      </Box>
    </Modal>
  );
};

export default Proposal;

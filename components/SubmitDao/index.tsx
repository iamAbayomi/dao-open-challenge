import {
  Box,
  Button,
  Input,
  Select,
  Text,
  Image,
  CloseButton
} from "@chakra-ui/react";
import { useState } from "react";
import { MdArrowForward, MdClose } from "react-icons/md";
import Modal from "../Modal";
import ContactDetails from "./ContactDetails";
import DaoName from "./DaoName";
import DescribeDAO from "./DescribeDAO";
import ProfileHandles from "./ProfileHandles";
import UploadDetails from "./UploadDetails";

interface IProps {
  onClose: () => void;
}

const SubmitDao = ({ onClose }: IProps) => {
  const [step, setStep] = useState<number>(1);
  return (
    <Modal onClose={onClose}>
      <Box
        background={"white"}
        borderRadius={"10px"}
        pos={"relative"}
        margin={{ base: "10vh 10px 0px 10px", md: "5vh auto" }}
        p={{ base: "50px 30px", md: "50px 80px 40px 60px" }}
        overflowX={"hidden"}
      >
        <Box display={"flex"} justifyContent={"space-between"}>
          <Text fontSize={"38px"} fontWeight={"700"}>
            Submit a DAO
          </Text>
          <CloseButton
            background={"rgba(217, 217, 217, 0.5)"}
            onClick={onClose}
          />
        </Box>

        <Box display={"flex"} gap={"5"} mt={"20px"}>
          <Box
            width={"251px"}
            height={"9px"}
            background={"rgba(255, 122, 0, 0.33)"}
            transform={"rotate(-180deg)"}
          />
          <Box
            width={"251px"}
            height={"9px"}
            background={
              step !== 1 && step !== 2 ? "rgba(255, 122, 0, 0.66)" : "#E2E2E2"
            }
            transform={"skew(-20deg)"}
            borderRadius={"2px"}
          />{" "}
          <Box
            width={"251px"}
            height={"9px"}
            background={step === 5 ? "#FF7A00" : "#E2E2E2"}
            transform={"skew(-20deg)"}
          />
        </Box>
        <Box>
          {step === 1 ? (
            <DaoName />
          ) : step === 2 ? (
            <DescribeDAO />
          ) : step === 3 ? (
            <ProfileHandles />
          ) : step === 4 ? (
            <ContactDetails />
          ) : (
            <UploadDetails />
          )}
        </Box>
        <Button
          mt={"60px"}
          bg={"#C2EC5B"}
          _focus={{ background: "#C2EC5B" }}
          _hover={{ background: "#C2EC5B" }}
          p={"25px 40px 25px 40px"}
          display={"flex"}
          gap={"5"}
          onClick={step === 5 ? onClose : () => setStep(step + 1)}
        >
          <Text>{step === 5 ? "Submit" : "Proceed"}</Text>
          <MdArrowForward />
        </Button>
      </Box>
    </Modal>
  );
};

export default SubmitDao;

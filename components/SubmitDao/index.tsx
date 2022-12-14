import { Box, Button, Input, Select, Text, Image } from "@chakra-ui/react";
import { MdArrowForward, MdClose } from "react-icons/md";
import ContactDetails from "./ContactDetails";
import DaoName from "./DaoName";
import DescribeDAO from "./DescribeDAO";
import ProfileHandles from "./ProfileHandles";
import UploadDetails from "./UploadDetails";

interface IProps {
  onClose: () => void;
}

const SubmitDao = ({ onClose }: IProps) => {
  return (
    <Box
      position={"fixed"}
      top={"0px"}
      left={"0px"}
      background={"rgba(27, 31, 36, 0.5)"}
      height={"100%"}
      width={"100%"}
      zIndex={"2000"}
    >
      <Box
        background={"white"}
        width={"100%"}
        maxWidth={"900px"}
        margin={"9vh auto"}
        p={"50px 80px 40px 60px"}
        borderRadius={"10px"}
        overflow={"auto"}
      >
        <Box display={"flex"} justifyContent={"space-between"}>
          <Text fontSize={"38px"} fontWeight={"700"}>
            Submit a DAO
          </Text>
          <MdClose onClick={onClose} />
        </Box>

        <Box display={"flex"} gap={"5"} mt={"20px"}>
          <Box
            width={"251px"}
            height={"9px"}
            background={"#E2E2E2"}
            transform={"rotate(-180deg)"}
            bg={"rgba(255, 122, 0, 0.33)"}
          />
          <Box
            width={"251px"}
            height={"9px"}
            background={"#E2E2E2"}
            transform={"skew(-20deg)"}
            borderRadius={"2px"}
          />{" "}
          <Box
            width={"251px"}
            height={"9px"}
            background={"#E2E2E2"}
            transform={"skew(-20deg)"}
          />
        </Box>
        <Box>
          {/*
          <DescribeDAO /> */}
          {/* <ProfileHandles /> */}
          {/* <DaoName /> */}
          {/* <ContactDetails /> */}
          <UploadDetails />
        </Box>
      </Box>
    </Box>
  );
};

export default SubmitDao;

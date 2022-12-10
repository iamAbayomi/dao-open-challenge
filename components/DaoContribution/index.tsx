import { Box, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { IInfoContainer } from "../../types";
import { infoData } from "../../utils/dummydata";
import InfoContainer from "../InfoContainer";

const OrangeText = styled.span`
  color: #ff7a00;
`;

const DaoContribution = () => {
  return (
    <Box>
      <Box>
        <Text
          mt={"154px"}
          fontSize={"56px"}
          fontWeight={"700"}
          textAlign={"center"}
        >
          How to make your first <br></br> <OrangeText>DAO </OrangeText>{" "}
          Contribution
        </Text>
        <Text fontWeight={"300"} textAlign={"center"}>
          We have over 1,000 Active DAOs for you to Explore
        </Text>
      </Box>
      <Box m={"140px auto 100px"} maxWidth={"900px"} display={"flex"}>
        {infoData.map((item: IInfoContainer) => (
          <InfoContainer key={item.id} item={item} />
        ))}
      </Box>
    </Box>
  );
};

export default DaoContribution;

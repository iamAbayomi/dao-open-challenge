import { Box, Text, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";

const Banner = () => {
  const Span = styled.span`
    color: #c2ec5b; ;
  `;

  return (
    <Box>
      <Box background={"black"} h={"38px"} p={"8px"} boxSizing={"border-box"}>
        <Box>
          <Image
            float={"right"}
            display={"inline"}
            w={"20px"}
            h={"20px"}
            alt={"cancel"}
            src={"./cancel.svg"}
          />
          <Box
            display={"flex"}
            alignItems={"center"}
            maxWidth={"max-content"}
            margin={"0px auto 0px"}
          >
            <Text color={"white"} textAlign={"center"} fontSize={"13px"}>
              📹 Watch our Full Video Course on “Web3” & DAOs,{" "}
              <Span> Click Here</Span>
            </Text>
            <Image
              ml={"6px"}
              height={"18px"}
              width={"18px"}
              alt="forward-arrow"
              src="./forward-arrow.svg"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;

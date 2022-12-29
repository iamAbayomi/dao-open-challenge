import { Box, Text, Image, Link } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";

const Banner = () => {
  const [showBanner, setShowBanner] = useState<boolean>(true);
  function toggleBanner() {
    setShowBanner(!showBanner);
  }

  const Span = styled.span`
    color: #c2ec5b; ;
  `;

  return (
    <Box>
      {showBanner && (
        <Box
          background={"black"}
          minH={"38px"}
          p={"8px"}
          boxSizing={"border-box"}
        >
          <Box>
            <Image
              float={"right"}
              display={"inline"}
              w={"20px"}
              h={"20px"}
              alt={"cancel"}
              src={"./cancel.svg"}
              onClick={toggleBanner}
            />
            <Box
              display={"flex"}
              alignItems={"center"}
              maxWidth={"max-content"}
              margin={"0px auto 0px"}
            >
              <Text color={"white"} textAlign={"center"} fontSize={"1rem"}>
                📹 Watch our Full Video Course on “Web3” & DAOs,{" "}
                <Link href="/video">
                  <Span> Click Here</Span>
                </Link>
              </Text>
              <Image
                display={{ base: "none", sm: "block" }}
                ml={"6px"}
                height={"18px"}
                width={"18px"}
                alt="forward-arrow"
                src="./forward-arrow.svg"
              />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Banner;

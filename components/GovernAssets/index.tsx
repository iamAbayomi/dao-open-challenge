import { Box, Image, Text } from "@chakra-ui/react";
import { governAssets } from "../../utils/dummydata";

const GovernAssets = () => {
  return (
    <Box>
      <Box margin={"200px 0px 0px 0px"}>
        <Text fontWeight={"700"} fontSize={"35px"}>
          Get involved without leaving the platform
        </Text>
        <Text maxWidth={"500px"} fontWeight={"300"} fontSize={"14px"}>
          We’re making it easier than ever to get involved with change by
          letting you join DAO without leaving the site
        </Text>
      </Box>

      <Box
        margin={"173px 0px 0px 0px"}
        display={"flex"}
        flexDir={{ base: "column", xl: "row" }}
      >
        <Box>
          <Image w={"500px"} alt={"firstsvg"} src={"./first-container.svg"} />
          <Image
            margin={"52px 0px 0px 100px"}
            w={"500px"}
            alt="secondsvg"
            src="./second-container.svg"
          />
        </Box>
        <Box ml={"130px"} mt={{ base: "120px", xl: "0px" }}>
          <Text fontWeight={"700"} fontSize={"33px"}>
            Govern your Assests
          </Text>
          {governAssets.map((item, index) => (
            <Box key={index} mt={"61px"} maxWidth={"max-content"}>
              <Box display={"flex"} alignItems={"center"} mt={"51px"}>
                <Image alt="" src="discover.svg" />
                <Text ml={"34px"} fontWeight={"300"}>
                  Govern and make decisions about your assets here
                </Text>
              </Box>
              <Box
                margin={"30px 0px 0px 60px"}
                borderBottom={"1px solid #DFDFDF"}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default GovernAssets;

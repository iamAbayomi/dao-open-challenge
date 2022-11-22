import { Box, Button, Text } from "@chakra-ui/react";
import Banner from "./components/Banner";
import Header from "./components/Header";
export default function Home() {
  return (
    <Box>
      <Box>
        <Banner />
        <Header />
        <Box>
          <Box>
            <Text
              margin={"122px 0px 0px"}
              fontWeight={"700"}
              fontSize={"122px"}
              textAlign={"center"}
            >
              All DAO. In ONE.
            </Text>
            <Text textAlign={"center"}>
              Join the OpenDAO Community to discover, invest in, and vote on
              exceptional DAOs. You have the power!
            </Text>
          </Box>
          <Box margin={"60px auto 0px auto"} maxWidth={"380px"}>
            <Button background={"#C2EC5B"}>
              <Text fontWeight={"400"}>Explore DAOs</Text>
            </Button>
            <Button ml={"40px"} background={"white"}>
              <Text fontWeight={"400"}>Take Quick Survey</Text>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

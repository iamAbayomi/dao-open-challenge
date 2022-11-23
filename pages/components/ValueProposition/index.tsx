import { Box, Button, Text } from "@chakra-ui/react";
import { ICategory } from "../../../types";
import { category } from "../../../utils";
import Category from "../Category";

const ValuePropositon = () => {
  return (
    <Box margin={"0px auto 0px"} maxW={"max-content"}>
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

      <Box display={"flex"} margin={"200px auto 0px"} maxWidth={"max-content"}>
        <Category item={category[0]} />
        <Box margin={"0px 50px 0px 50px"} borderLeft={"1px solid #A0A0A0"} />
        <Category item={category[1]} />
        <Box margin={"0px 50px 0px 50px"} borderLeft={"1px solid #A0A0A0"} />
        <Category item={category[2]} />
      </Box>
    </Box>
  );
};

export default ValuePropositon;

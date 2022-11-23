import { Box, Button, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { ICategory } from "../types";
import { category } from "../utils";
import Banner from "./components/Banner";
import Category from "./components/Category";
import Header from "./components/Header";
import ValuePropositon from "./components/ValueProposition";

const Span = styled.span`
  color: black;
`;

export default function Home() {
  return (
    <Box>
      <Box pb={"100px"}>
        <Banner />
        <Header />
        <ValuePropositon />
        <Text
          margin={"200px 0px 20px 50px"}
          color={"#FF7A00"}
          fontWeight={"700"}
          fontSize={"56px"}
        >
          Discover <Span> our</Span> DAOs
        </Text>
      </Box>
    </Box>
  );
}

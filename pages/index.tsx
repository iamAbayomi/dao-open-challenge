import { Box, Button, Image, Input, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import {
  badgeData,
  gettingStartedData,
  governAssets,
  headerData,
  hotDaoData,
  infoData,
  newDaoData,
  resourcesData
} from "../utils/dummydata";
import Badge from "../components/Badge";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ValuePropositon from "../components/ValueProposition";
import { IDaoContainer, IHeaderLink, IInfoContainer, IItem } from "../types";
import DiscoverDao from "../components/DiscoverDao";
import InfoContainer from "../components/InfoContainer";
import DiscoverSection from "../components/DiscoverSection";
import GettingStartedComponent from "../components/GettingStarted/GettingStartedComponent";
import HeaderText from "../components/HeaderText";
import DaoContribution from "../components/DaoContribution";
import GovernAssets from "../components/GovernAssets";
import GettingStartedSection from "../components/GettingStarted/GettingStartedSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Box>
      <Box pb={"0px"}>
        <Banner />
        <Header />
        <ValuePropositon />
        <Box margin={"200px 0px 20px 50px"}>
          <DiscoverSection />
          <DaoContribution />
          <GovernAssets />
          <GettingStartedSection />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}

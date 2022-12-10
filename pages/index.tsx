import { Box } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ValuePropositon from "../components/ValueProposition";
import DiscoverSection from "../components/DiscoverSection";
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

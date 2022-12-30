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
    <Box overflowX={"hidden"}>
      <Box pb={"0px"} margin={"auto"} maxWidth={"2000px"}>
        <Banner />
        <Header isDark={false} />
        <ValuePropositon />
        <Box margin={{ base: "200px 30px 0px", xl: "200px 0px 20px 50px" }}>
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

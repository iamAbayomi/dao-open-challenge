import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import DiscoverSection from "../../components/DiscoverSection";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

type props = {
  isDark: boolean;
  children: ReactNode;
};

const HomeLayout = ({ isDark, children }: props) => {
  return (
    <Box margin={"auto"} maxWidth={"2000px"}>
      <Header isDark={isDark} />
      {children}
      <Footer />
    </Box>
  );
};

export default HomeLayout;

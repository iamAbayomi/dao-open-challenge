import { Box } from "@chakra-ui/react";
import DiscoverSection from "../../DiscoverSection";
import Footer from "../../Footer";
import Header from "../../Header";

type props = {
  children: string;
};

const HomeLayout = ({ children }: props) => {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default HomeLayout;

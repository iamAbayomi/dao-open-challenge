import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import DiscoverSection from "../../DiscoverSection";
import Footer from "../../Footer";
import Header from "../../Header";

type props = {
  children: ReactNode;
};

const HomeLayout = ({ children }: props) => {
  return (
    <Box margin={"auto"} maxWidth={"2000px"}>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default HomeLayout;

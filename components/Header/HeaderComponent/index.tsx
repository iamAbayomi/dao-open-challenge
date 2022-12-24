import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { IHeaderLink } from "../../../types";
import { headerData } from "../../../utils/dummydata";
import HeaderText from "../../HeaderText";
import { GrMenu } from "react-icons/gr";
import { RiMenuLine } from "react-icons/ri";

interface IProps {
  isDark: boolean;
  showMenu: boolean;
  toggleMenu: () => void;
}

const HeaderComponent = ({ isDark, toggleMenu }: IProps) => {
  const router = useRouter();

  function moveToHomePage() {
    router.push("/");
  }
  return (
    <Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        p={{ base: "24px 20px 20px 20px", md: "24px 70px 20px" }}
        boxSizing={"border-box"}
        borderBottom={"1px solid #CFCFCF"}
        background={isDark ? "black" : "white"}
      >
        <Box display={"flex"} onClick={moveToHomePage} className={"pointer"}>
          <Image
            alt={"open-dao-logo"}
            src={isDark ? "app-logo-green.svg" : "opendao.svg"}
          />
          <Text
            ml={"20px"}
            fontSize={"40px"}
            fontWeight={"700"}
            fontStyle={"bold"}
            color={isDark ? "white" : "black"}
          >
            OpenDAO
          </Text>
        </Box>

        <Box display={{ base: "none", xl: "flex" }} gap={"20px"}>
          {headerData?.map((item: IHeaderLink) => (
            <HeaderText
              key={item?.id}
              name={item?.name}
              link={item?.link}
              color={isDark ? "white" : "black"}
              isDark={isDark}
            />
          ))}
        </Box>

        <Button display={{ base: "none", xl: "flex" }} background={"#C2EC5B"}>
          <Image alt={"link"} src={"./link.svg"} />
          <Text color={"black"} fontWeight={"400"}>
            Connect Wallet
          </Text>
        </Button>

        <Box
          display={{ base: "block", xl: "none" }}
          background={!isDark ? "white" : "black"}
          border={"0.1px solid grey"}
          p={"14px"}
          borderRadius={"8px"}
          onClick={toggleMenu}
        >
          <RiMenuLine color={isDark ? "white" : "black"} />
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderComponent;

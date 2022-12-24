import { Box, Button, Text, Image, CloseButton } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { IHeaderLink } from "../../types";
import { headerData } from "../../utils/dummydata";
import { useIsDarkMode } from "../../utils/helpers";
import { IoMdClose } from "react-icons/io";
import HeaderComponent from "./HeaderComponent";
import ResponsiveMenuHeaderComponent from "./ResponsiveMenuHeaderComponent";

interface IProps {
  isDark: boolean;
}

const Header = ({ isDark }: IProps) => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState<boolean>(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  function moveToHomePage() {
    router.push("/");
  }

  return (
    <Box>
      <HeaderComponent
        isDark={isDark}
        showMenu={showMenu}
        toggleMenu={toggleMenu}
      />

      {showMenu && (
        <Box
          position={"fixed"}
          top={"0"}
          width={"100%"}
          height={"100vh"}
          background={"#C2EC5B"}
          zIndex={"10000"}
        >
          <Box margin={"50px 40px 0px 0px"} float={"right"}>
            <IoMdClose size={"42px"} color={"black"} onClick={toggleMenu} />
          </Box>

          <Box maxWidth={"300px"} margin={"20vh auto 50px"}>
            <Box gap={"20px"}>
              {headerData?.map((item: IHeaderLink) => (
                <ResponsiveMenuHeaderComponent
                  key={item?.id}
                  name={item?.name}
                  link={item?.link}
                  color={"black"}
                  isDark={isDark}
                />
              ))}
            </Box>

            <Button
              mt={"60px"}
              background={"white"}
              p={"30px 40px 30px"}
              borderRadius={"5px"}
              boxSizing={"border-box"}
            >
              <Image alt={"link"} src={"./link.svg"} />
              <Text color={"black"} fontSize={"24px"} fontWeight={"400"}>
                Connect Wallet
              </Text>
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Header;

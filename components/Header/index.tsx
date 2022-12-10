import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { IHeaderLink } from "../../types";
import { headerData } from "../../utils/dummydata";
import HeaderText from "../HeaderText";

const Header = () => {
  const router = useRouter();
  function isExplorePage() {
    return router.pathname.includes("/aboutus") ? true : false;
  }
  function moveToHomePage() {
    router.push("/");
  }
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={"24px 80px 24px"}
      boxSizing={"border-box"}
      borderBottom={"1px solid #CFCFCF"}
    >
      <Box display={"flex"} onClick={moveToHomePage} className={"pointer"}>
        <Image
          alt={"open-dao-logo"}
          src={isExplorePage() ? "app-logo-green.svg" : "opendao.svg"}
        />
        <Text
          ml={"20px"}
          fontSize={"50px"}
          fontWeight={"700"}
          color={isExplorePage() ? "white" : "black"}
        >
          OpenDAO
        </Text>
      </Box>
      <Box display={"flex"}>
        {headerData?.map((item: IHeaderLink) => (
          <HeaderText
            key={item?.id}
            name={item?.name}
            link={item?.link}
            color={isExplorePage() ? "white" : "black"}
            isDark={isExplorePage()}
          />
        ))}
      </Box>
      <Button background={"#C2EC5B"}>
        <Image alt={"link"} src={"./link.svg"} />
        <Text color={!isExplorePage() ? "white" : "black"} fontWeight={"400"}>
          Connect Wallet
        </Text>
      </Button>
    </Box>
  );
};

export default Header;

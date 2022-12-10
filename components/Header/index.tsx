import { Box, Button, Image, Text } from "@chakra-ui/react";
import { IHeaderLink } from "../../types";
import { headerData } from "../../utils/dummydata";
import HeaderText from "../HeaderText";

const Header = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={"24px 80px 24px"}
      boxSizing={"border-box"}
      borderBottom={"1px solid #CFCFCF"}
    >
      <Box display={"flex"}>
        <Image alt={"open-dao-logo"} src={"opendao.svg"} />
        <Text ml={"20px"} fontSize={"50px"} fontWeight={"700"}>
          OpenDAO
        </Text>
      </Box>
      <Box display={"flex"}>
        {headerData?.map((item: IHeaderLink) => (
          <HeaderText key={item?.id} name={item?.name} link={item?.link} />
        ))}
      </Box>
      <Button background={"#C2EC5B"}>
        <Image alt={"link"} src={"./link.svg"} />
        <Text fontWeight={"400"}>Connect Wallet</Text>
      </Button>
    </Box>
  );
};

export default Header;

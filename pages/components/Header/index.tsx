import { Box, Image, Text } from "@chakra-ui/react";
import { IHeaderLink } from "../../../types";
import HeaderText from "../HeaderText";

const Header = () => {
  const headerData: IHeaderLink[] = [
    { id: 1, name: "Explore", link: "/explore" },
    { id: 1, name: "Learn", link: "" },
    { id: 1, name: "About Us", link: "" },
    { id: 1, name: "Documentation", link: "" }
  ];

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      p={"30px 92px 30px"}
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
    </Box>
  );
};

export default Header;

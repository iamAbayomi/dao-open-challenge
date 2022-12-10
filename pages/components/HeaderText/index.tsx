import { Box, Text, Image } from "@chakra-ui/react";
import Link from "next/link";

interface IProps {
  name: string;
  link: string;
}

const HeaderText = ({ name, link = "" }: IProps) => {
  return (
    <Link href={link}>
      <Box display={"flex"} m={"0px 10px 0px"}>
        <Text fontWeight={"300"}>{name}</Text>
        <Image ml={"10px"} alt="up-arrow" src="./arrow-right.svg" />
      </Box>
    </Link>
  );
};

export default HeaderText;

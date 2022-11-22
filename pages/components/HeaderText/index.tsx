import { Box, Text, Image } from "@chakra-ui/react";
import Link from "next/link";

interface IProps {
  name: string;
  link: string;
}

const HeaderText = ({ name, link = "" }: IProps) => {
  return (
    <Link href={link}>
      <Box display={"flex"}>
        <Text>{name}</Text>
        <Image alt="up-arrow" src="./arrow-right.svg" />
      </Box>
    </Link>
  );
};

export default HeaderText;

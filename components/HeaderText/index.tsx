import { Box, Text, Image } from "@chakra-ui/react";
import Link from "next/link";

interface IProps {
  name: string;
  link: string;
  color?: string;
  isDark?: boolean;
}

const HeaderText = ({ name, link = "", color, isDark }: IProps) => {
  return (
    <Link href={link}>
      <Box display={"flex"} m={"0px 10px 0px"}>
        <Text color={color} fontWeight={"300"}>
          {name}
        </Text>
        <Image
          ml={"10px"}
          alt="up-arrow"
          src={`${isDark ? "./arrow-up-right.svg" : "./arrow-right.svg"} `}
        />
      </Box>
    </Link>
  );
};

export default HeaderText;

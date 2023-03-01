import { Box, Text, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useGetPathname } from "../../../utils/helpers";

interface IProps {
  name: string;
  link: string;
  color?: string;
  isDark?: boolean;
  active?: boolean;
}

const ResponsiveMenuHeaderComponent = ({
  name,
  link = "",
  color,
  isDark,
  active
}: IProps) => {
  const linkStyle = { color: "white", fontWeight: "700" };
  return (
    <Box>
      <Link href={link}>
        <Box display={"flex"} m={"0px 10px 0px"} alignItems={"center"}>
          <Text
            m={"20px 0px"}
            textAlign={"center"}
            color={active ? "white" : color}
            fontWeight={active ? "700" : "400"}
            fontSize={"42px"}
            _hover={linkStyle}
          >
            {name}
          </Text>
        </Box>
      </Link>
    </Box>
  );
};

export default ResponsiveMenuHeaderComponent;

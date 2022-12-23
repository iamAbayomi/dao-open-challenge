import { Box, Text, Image } from "@chakra-ui/react";
import Link from "next/link";

interface IProps {
  name: string;
  link: string;
  color?: string;
  isDark?: boolean;
}

const ResponsiveMenuHeaderComponent = ({
  name,
  link = "",
  color,
  isDark
}: IProps) => {
  return (
    <Box>
      <Link href={link}>
        <Box display={"flex"} m={"0px 10px 0px"} alignItems={"center"}>
          <Text
            m={"20px 0px"}
            textAlign={"center"}
            color={color}
            fontWeight={"400"}
            fontSize={"42px"}
            _hover={{ color: "white", fontWeight: "700" }}
          >
            {name}
          </Text>
          {/* <Image
            ml={"10px"}
            width={name == "Learn" ? "12px" : "17px"}
            alt="up-arrow"
            src={`${
              isDark
                ? "./arrow-up-right.svg"
                : name === "Learn"
                ? "./downarrow.svg"
                : "./arrow-right.svg"
            }`}
          /> */}
        </Box>
      </Link>
    </Box>
  );
};

export default ResponsiveMenuHeaderComponent;

import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import Header from "../../components/Header";
import { IAboutUs, IText } from "../../types";
import { aboutusData } from "../../utils/dummydata";

const Index = () => {
  return (
    <Box background={"black"} color={"white"} pb={"200px"}>
      <Header isDark />
      <Box mt={"100px"}>
        {aboutusData?.map((item: IAboutUs) => (
          <Box
            key={item?.id}
            m={{ base: "191px 40px 0px", sm: "191px 40px 0px 90px" }}
          >
            <Text fontWeight={"700"} fontSize={"66px"}>
              {item?.title}
            </Text>
            <Box border={"1px solid white"} />
            {item?.links?.map((link: IText, index) => (
              <Link key={index} href={link?.link} target={"_blank"}>
                <Text m={"20px 0px"}>{link?.text}</Text>
              </Link>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Index;

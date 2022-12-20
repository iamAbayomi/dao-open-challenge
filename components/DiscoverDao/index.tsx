import { Box, Text, Image, Button } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { badgeData } from "../../utils/dummydata";
import Badge from "../Badge";

const Span = styled.span`
  color: black;
`;
const DiscoverDao = () => {
  const router = useRouter();
  function isExplorePage() {
    return router.pathname.includes("/explore") ? true : false;
  }
  return (
    <Box>
      <Text color={"#FF7A00"} fontWeight={"700"} fontSize={"56px"}>
        Discover <Span> our</Span> DAOs
      </Text>
      <Text fontWeight={"300"}>
        We have over 1,000 Active DAOs for you to Explore
      </Text>
      {isExplorePage() && (
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          background={"#FF7A00"}
          borderRadius={"10px"}
          m={"63px 50px 80px 0px"}
          p={"30px 60px 40px"}
        >
          <Box color={"white"}>
            <Text fontWeight={"700"} fontSize={"30px"}>
              Create your DAO with us
            </Text>
            <Text mt={"20px"} maxWidth={"600px"}>
              We want your DAO to be a part of the largest DAO database we can
              develop. After submission, We&apos;ll check your data for
              accuracy. We could also be in touch to ask for more details.
            </Text>
          </Box>
          <Button p={"10px 40px"} background={"#C2EC5B"}>
            <Text fontWeight={"400"} fontSize={"13px"}>
              Submit a DAO
            </Text>
          </Button>
        </Box>
      )}

      <Box margin={"32px 0px 0px 0px"} display={"flex"} alignItems={"center"}>
        <Box
          height={"70px"}
          width={"43.75rem"}
          border={"1px solid #BEBEBE"}
          borderRadius={"20px"}
          background={"#FBFBFB"}
        >
          <Box
            display={"flex"}
            margin={"25px 67px 12px 37px"}
            boxSizing={"border-box"}
          >
            <Image
              width={"20px"}
              height={"20px"}
              alt="search"
              src="./search.svg"
            />
            <Text
              ml={"15px"}
              color={"#919191"}
              fontWeight={"400"}
              fontSize={"12px"}
            >
              Search for DAOs
            </Text>
          </Box>
        </Box>
        <Box
          display={{ base: "none", xl: "flex" }}
          background={"#FBFBFB"}
          p={"10px 20px"}
          ml={"30px"}
          boxSizing={"border-box"}
          border={"1px solid #DBDBDB"}
          borderRadius={"10px"}
        >
          <Image height={"24px"} alt={"grid"} src={"./grid.svg"} />
          <Text ml={"15px"} fontWeight={"400"}>
            Grid View
          </Text>
        </Box>
      </Box>

      <Box
        mt={"49px"}
        display={"none"}
        width={"100%"}
        gap={"40px"}
        alignItems={"center"}
      >
        {badgeData?.map((item) => (
          <Badge key={item?.id} item={item} />
        ))}

        <Box fontSize={"14px"} background={"black"} borderRadius={"20px"}>
          <Text m={"10px 20px"} color={"white"}>
            View More
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default DiscoverDao;

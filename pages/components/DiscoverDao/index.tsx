import { Box, Text, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { badgeData } from "../../../utils/dummydata";
import Badge from "../Badge";

const Span = styled.span`
  color: black;
`;
const DiscoverDao = () => {
  return (
    <Box>
      <Text color={"#FF7A00"} fontWeight={"700"} fontSize={"56px"}>
        Discover <Span> our</Span> DAOs
      </Text>
      <Text fontWeight={"300"}>
        We have over 1,000 Active DAOs for you to Explore
      </Text>
      <Box margin={"32px 0px 0px 0px"} display={"flex"} alignItems={"center"}>
        <Box
          height={"70px"}
          width={"700px"}
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
          display={"flex"}
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

      <Box mt={"49px"} display={"flex"} width={"100%"} alignItems={"center"}>
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

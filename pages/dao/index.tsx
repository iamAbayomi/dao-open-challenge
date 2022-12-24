import { Box, Button, Image, Text } from "@chakra-ui/react";
import { IoMdAdd } from "react-icons/io";
import Badge from "../../components/Badge";
import AllProposalSection from "../../components/Daos/AllProposals/AllProposalSection";
import Categories from "../../components/Daos/Categories";
import NewsLetter from "../../components/Daos/NewsLetter";
import HomeLayout from "../../layout/HomeLayout";
import { ICategories } from "../../types";
import { categoriesData, detailedDao } from "../../utils/dummydata";

const Index = () => {
  return (
    <HomeLayout>
      <Box>
        <Box display={"flex"} justifyContent={"space-between"} m={"100px 50px"}>
          <Box>
            <Image height={"150px"} alt={"app-logo"} src={"./appDao.svg"} />
            <Text fontWeight={"700"} fontSize={"48px"}>
              Apecoin DAO
            </Text>
            <Text
              fontWeight={"300"}
              fontSize={"14px"}
              mt={"20px"}
              maxWidth={"600px"}
            >
              ApeCoin is an ERC-20 governance and utility token used to empower
              a decentralized community building at the forefront of web3.
            </Text>
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={"20px"}
              mt={"54px"}
            >
              <Text fontWeight={"700"} fontSize={"28px"}>
                $7.22
              </Text>
              <Box
                display={"flex"}
                alignItems={"center"}
                width={"max-content"}
                p={"2px 10px"}
                background={"#F93232"}
                color={"white"}
                borderRadius={"10px"}
                boxSizing={"border-box"}
              >
                <Image
                  m={"0px 10px 0px 0px"}
                  w={"12px"}
                  alt="dropdown"
                  src="./dropdown.svg"
                />
                <Text fontWeight={"400"}>3.37%</Text>
              </Box>
            </Box>
            <Box display={"flex"} gap={"10px"} mt={"20px"}>
              <Image h={"35px"} alt={"messenger"} src={"messenger.svg"} />
              <Image h={"35px"} alt={"twitter"} src={"twitter-circle.svg"} />
              <Image h={"35px"} alt="copy-link" src="copy-link.svg" />
            </Box>
          </Box>
          <Button
            fontWeight={"400"}
            fontSize={"14px"}
            color={"white"}
            background={"#000000"}
            p={"16px 50px 16px 50px"}
          >
            <Text>Join DAO</Text>
            <Image width={"18px"} alt="arrow-up" src="./arrow-up-right.svg" />
          </Button>
        </Box>
        <Box
          margin={"190px 50px 0px"}
          display={"flex"}
          justifyContent={"space-between"}
          pb={"46px"}
        >
          <Box display={"flex"} gap={"20px"}>
            {detailedDao?.map((item) => (
              <Badge
                key={item?.id}
                item={item}
                background={item?.id === 1 ? "#858585" : ""}
                textColor={item?.id === 1 ? "white" : ""}
                isRowReverse
              />
            ))}
          </Box>
          <Button background={"black"} color={"white"} borderRadius={"10px"}>
            <IoMdAdd />
            <Text ml={"10px"}>Create New Proposal</Text>
          </Button>
        </Box>
        <Box borderBottom={"0.1px solid #C6C6C6"} />
        <Box m={"20px 50px 30px"} display={"flex"} gap={"80px"}>
          <Box>
            <Box
              display={"flex"}
              mb={"42px"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Text color={"#A3A3A3"}>CATEGORIES</Text>
              <Image alt="up-down" src="./up-down-arrow.svg" />
            </Box>

            <Box>
              {categoriesData?.map((item: ICategories) => (
                <Categories key={item?.id} item={item} />
              ))}
            </Box>
            <Box>
              <NewsLetter />
            </Box>
          </Box>
          <Box>
            <AllProposalSection />
          </Box>
        </Box>
      </Box>
    </HomeLayout>
  );
};

export default Index;

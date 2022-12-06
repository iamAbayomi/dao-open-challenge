import { Box, Text, Image } from "@chakra-ui/react";
import { IDaoContainer } from "../../../types";

interface IProps {
  item: IDaoContainer;
}

const DaoContainer = ({ item }: IProps) => {
  return (
    <Box
      background={
        "linear-gradient(105.6deg, #F8F8F8 0%, rgba(248, 248, 248, 0) 100%)"
      }
      width={"300px"}
    >
      <Box>
        <Image alt={"appLogo"} src={item?.appLogo} />
        <Text>{item?.title}</Text>
      </Box>
      <Box>
        <Text>daa</Text>
      </Box>
    </Box>
  );
};

export default DaoContainer;

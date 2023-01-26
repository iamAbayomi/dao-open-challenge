import { Box, Image, Link } from "@chakra-ui/react";
import HomeLayout from "../../layout/HomeLayout";

const Video = () => {
  return (
    <HomeLayout isDark>
      <Box background={"black"}>
        <Link
          href="https://temidayodolajin.notion.site/OpenDAO-All-DAO-In-ONE-48759ac1a8074118bcaec129e92cbd17"
          target={"_blank"}
        >
          <Image
            margin={"auto"}
            p={{ base: "87px 10px", sm: "87px 30px" }}
            maxW={{ base: "400px", sm: "1200px" }}
            alt={"image"}
            src={"./video.svg"}
          />
        </Link>
      </Box>
    </HomeLayout>
  );
};

export default Video;

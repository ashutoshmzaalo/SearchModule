import { Flex, Link, Box, Image, Heading, Grid } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const ViewallTrailer = ({ rails }) => {
  return (
    <Flex flexDirection="column" w="500">
      <Flex
        as="header"
        align=""
        justify="space-between"
        wrap="wrap"
        //bgColor="whiteAlpha.300"
        py="6"
        px="6"
        w="100%"
        top="0"
        pos="fixed"
        zIndex="2"
        rounded={"sm"}
      >
        <Flex align="center" mr="5">
          <RouterLink to={`/`}>
            <Heading
              as="h1"
              color="#A27B5C"
              fontWeight="bold"
              size="md"
              letterSpacing="md"
              _hover={{ color: "#eeeeee", textDecor: "none" }}
            >
              MZAALO
            </Heading>
          </RouterLink>
        </Flex>
      </Flex>
      <Flex>
        <Grid
          templateColumns={{
            sm: "1fr ",
            md: "1fr 1fr 1fr 1fr ",
            lg: "1fr 1fr 1fr 1fr 1fr",
          }}
          ml="20"
          mt="5"
          mr="5"
          gap="5"
          flexDirection={{
            base: "row",
            sm: "row",
            md: "row",
            lg: "column",
          }}
        >
          <Flex
            className="example"
            flexDirection="column"
            position="absolute"
            w="500%"
            display="contents"
            //overflowX="

            gap="5"
          >
            {rails.map((Data) => (
              <Link _hover={{ transform: "scale(1.1)" }}>
                <Box
                  w="200px"
                  borderRadius="md"
                  bgColor="#"
                  transition="all"
                  _hover={{ shadow: "md" }}
                >
                  <Image
                    key={Data}
                    value={Data}
                    //src="Image.png"
                    src={Data.images["17"]}
                    w="100%"
                    objectFit="cover"
                  ></Image>
                </Box>
                <Flex
                  py="2"
                  px="3"
                  //direction="column"
                  justifyContent="space-between"
                >
                  <Heading
                    key={Data}
                    value={Data}
                    src={Data.title}
                    as="h4"
                    fontSize="md"
                    mb="3"
                    color="gray.300"
                    w="100%"
                  >
                    {Data.title}
                  </Heading>
                </Flex>
              </Link>
            ))}
          </Flex>
        </Grid>
      </Flex>
    </Flex>
  );
};

export default ViewallTrailer;

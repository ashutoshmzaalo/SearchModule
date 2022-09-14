import {
  Flex,
  Link,
  Box,
  Image,
  Heading,
  Grid,
  Button,
  Container,
  GridItem,
} from "@chakra-ui/react";

const ViewallClips = ({ rails }) => {
  return (
    <Flex flexDirection="column" w="500">
      <Flex>
        <Grid
          templateColumns={{
            sm: "1fr ",
            md: "1fr 1fr 1fr 1fr ",
            lg: "1fr 1fr 1fr 1fr ",
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
            // justifyContent="space-between"
            gap="5"
          >
            {rails.map((Data) => (
              <Link _hover={{ transform: "scale(1.1)" }}>
                <Box
                  w="300px"
                  borderRadius="md"
                  bgColor="#"
                  transition="all"
                  _hover={{ shadow: "md" }}
                >
                  <Image
                    key={Data}
                    value={Data}
                    //src="Image.png"
                    src={Data.images["1025"]}
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

export default ViewallClips;

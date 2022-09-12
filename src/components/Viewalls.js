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

const Viewalls = ({ rails }) => {
  return (
    <Flex flexDirection="column">
      <Flex spaceBetween="">
        <Grid
          templateColumns={{
            sm: "1fr ",
            md: "1fr 1fr 1fr 1fr ",
            lg: "1fr 1fr 1fr 1fr 1fr ",
          }}
          ml="20"
          mt="5"
          mr="5"
          gap="5"
          flexDirection={{
            base: "column",
            sm: "row",
            md: "row",
            lg: "column",
          }}
        >
          <Flex
            className="example"
            flexDirection="column"
            w="535%"
            justifyContent="space-between"
            gap="10"
          >
            {rails.map((Data) => (
              <Link _hover={{ textDecor: "none" }}>
                <Box
                  w="200px"
                  borderRadius="md"
                  bgColor="#dddddd"
                  transition="all"
                  _hover={{ shadow: "md" }}
                >
                  <Image
                    key={Data}
                    value={Data}
                    //src="Image.png"
                    src={Data.images["8"]}
                    w="100%"
                    objectFit="cover"
                  ></Image>

                  <Flex
                    py="2"
                    px="3"
                    direction="column"
                    justifyContent="space-between"
                  >
                    <Heading
                      key={Data}
                      value={Data}
                      src={Data.title}
                      as="h4"
                      fontSize="md"
                      mb="3"
                      Color="black"
                      w="100%"
                    >
                      {Data.title}
                    </Heading>
                  </Flex>
                </Box>
              </Link>
            ))}
          </Flex>
        </Grid>
      </Flex>
    </Flex>
  );
};

export default Viewalls;

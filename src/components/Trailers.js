import {
  Flex,
  Link,
  Box,
  Image,
  Heading,
  Grid,
  Button,
} from "@chakra-ui/react";
import "./style.css";

const Trailers = ({ trailerRails }) => {
  return (
    <Flex flexDirection="column">
      <Button
        ml="1330"
        mr="5"
        as="h1"
        fontWeight="bold"
        size="md"
        letterSpacing="md"
        color="blue.400"
        background="none"
        // key={Data}
        //value={Data}
        //src=""
      >
        View All
      </Button>
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
          alignContent="center"
          flexDirection={{
            base: "column",
            sm: "row",
            md: "row",
            lg: "column",
          }}
        >
          <Flex
            className="example"
            flexDirection="row"
            w="535%"
            overflowY="hidden"
            justifyContent="space-between"
            gap="10"
          >
            {trailerRails.map((Data) => (
              <Link _hover={{ textDecor: "none" }}>
                <Box
                  w="200px"
                  
                  borderRadius="lg"
                  overflow="auto"
                  bgColor="#dddddd"
                  transition="all"
                  _hover={{ shadow: "md" }}
                >
                  <Image
                    key={Data}
                    value={Data}
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
                      fontSize="lg"
                      mb="3"
                      Color="black"
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

export default Trailers;

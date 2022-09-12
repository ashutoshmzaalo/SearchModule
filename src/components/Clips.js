import {
  Flex,
  Link,
  Box,
  Image,
  Heading,
  Grid,
  Button,
  Container,
} from "@chakra-ui/react";
import "./style.css";

const Clips = ({ clipRails }) => {
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
            lg: "row",
          }}
        >
          <Flex
            className="example"
            flexDirection="row"
            w="535%"
            justifyContent="space-between"
            gap="10"
            overflowY="hidden"
          >
            {clipRails.map((Data) => (
              <Link _hover={{ textDecor: "none" }}>
                <Box
                  w="300px"
                  borderRadius="lg"
                  overflowX="auto"
                  bgColor="#dddddd"
                  transition="all"
                  _hover={{ shadow: "md" }}
                >
                  <Box position="relative">
                    <Image
                      key={Data}
                      value={Data}
                      src={Data.images["1025"]}
                      w="250%"
                      objectFit="cover"
                    ></Image>
                  </Box>
                  <Flex
                    py="3"
                    px="4"
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

export default Clips;

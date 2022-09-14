import { Flex, Link, Box, Image, Heading, Grid } from "@chakra-ui/react";
import "./style.css";

const Originals = ({ originalRails }) => {
  return (
    <Flex flexDirection="column">
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
            gap="10"
          >
            {originalRails.map((Data) => (
              <Link _hover={{ transform: "scale(1.1)", dropShadow: "lg" }}>
                <Box
                  w="300px"
                  borderRadius="lg"
                  transition="all"
                  _hover={{ shadow: "md" }}
                >
                  <Image
                    key={Data}
                    value={Data}
                    src={Data.images["98"]}
                    w="200%"
                    objectFit="cover"
                  ></Image>
                </Box>
                <Flex py="2" px="3" direction="column">
                  <Heading
                    key={Data}
                    value={Data}
                    src={Data.title}
                    as="h3"
                    fontSize="sm"
                    mb="3"
                    w="100%"
                    color="gray.300"
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

export default Originals;

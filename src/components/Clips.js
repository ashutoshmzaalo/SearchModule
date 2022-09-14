import { Flex, Link, Box, Image, Heading, Grid } from "@chakra-ui/react";
import "./style.css";

const Clips = ({ clipRails }) => {
  return (
    <Flex flexDirection="column">
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
            gap="10"
            overflowY="hidden"
          >
            {clipRails.map((Data) => (
              <Link _hover={{ transform: "scale(1.1)", dropShadow: "lg" }}>
                <Box
                  w="300px"
                  borderRadius="lg"
                  overflowX="auto"
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
                </Box>
                <Flex py="3" px="4" direction="column">
                  <Heading
                    key={Data}
                    value={Data}
                    src={Data.title}
                    as="h4"
                    fontSize="md"
                    mb="3"
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

export default Clips;

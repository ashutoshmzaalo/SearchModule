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

import "./style.css";

const Movies = ({ rails }) => {
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
            lg: "row",
          }}
        >
          <Flex
            className="example"
            flexDirection="row"
            w="535%"
            overflowY="hidden"
            gap="10"
          >
            {rails.map((Data) => (
              <Link _hover={{ transform: "scale(1.1)", dropShadow: "lg" }}>
                <Box
                  w="200px"
                  borderRadius="md"
                  transition="all"
                  _hover={{ shadow: "lg" }}
                >
                  <Image
                    key={Data}
                    value={Data}
                    //src="Image.png"
                    src={Data.images["8"]}
                    w="100%"
                    objectFit="cover"
                  ></Image>
                </Box>
                <Flex py="2" px="3" direction="column">
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

export default Movies;

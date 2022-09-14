import {
  Flex,
  Link,
  Box,
  Image,
  Heading,
  Button,
  Grid,
  Container,
} from "@chakra-ui/react";
import "./style.css";

const Stars = ({ starRails }) => {
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
            overflowY="hidden"
            gap="10"
          >
            {starRails.map((Data) => (
              <Link _hover={{ transform: "scale(1.1)", dropShadow: "lg" }}>
                <Box
                  w="200px"
                  borderRadius="lg"
                  transition="all"
                  _hover={{ shadow: "md" }}
                >
                  <Image
                    key={Data}
                    value={Data}
                    src={Data.images["66"]}
                    w="100%"
                    objectFit="cover"
                  ></Image>
                </Box>
                <Flex py="4" px="4" direction="column">
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

export default Stars;

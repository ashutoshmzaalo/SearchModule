import Viewalls from "./Viewalls";
import { Flex, Heading } from "@chakra-ui/react";

import "./style.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MoviesViewall = () => {
  const [viewAll, SetviewAll] = useState([]);
  let { search, catalog } = useParams();

  useEffect(() => {
    ViewAll();
  }, []);
  console.log(search);
  const ViewAll = async () => {
    const viewMovie = `https://staging.mzaalo.com/search/viewall?search=${search}&index=${catalog}&page=1`;
    const ViewMovie = await fetch(viewMovie);
    const AllMovie = await ViewMovie.json().then((Data) => {
      SetviewAll(Data?.data.detail);
    });
    console.log(viewAll);
    console.log(AllMovie);
  };

  return (
    <Flex flexDirection="column">
      <Heading
        as="h1"
        color="gray.50"
        fontWeight="bold"
        size="md"
        letterSpacing="md"
        mt="40"
        ml="20"
      >
        All Movies:
      </Heading>

      <Flex alignItems="center" ml="10">
        <Viewalls rails={viewAll} />{" "}
      </Flex>
    </Flex>
  );
};

export default MoviesViewall;

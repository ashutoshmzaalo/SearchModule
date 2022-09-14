import Viewalls from "./Viewalls";
import {
  Flex,
  Grid,
  Link,
  Box,
  Image,
  Heading,
  Container,
} from "@chakra-ui/react";

import "./style.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ViewallTrailer from "./ViewallTrailer";

const TrailerViewall = () => {
  const [viewAll, SetviewAll] = useState([]);
  let { search, catalog } = useParams();

  useEffect(() => {
    ViewAll();
  }, []);
  console.log(search);
  const ViewAll = async () => {
    //let message = "baj";
    //let message = document.getElementById("message").value;
    const viewTrailer = `https://staging.mzaalo.com/search/viewall?search=${search}&index=${catalog}&page=1`;
    const ViewTrailer = await fetch(viewTrailer);
    const AllTrailer = await ViewTrailer.json().then((Data) => {
      SetviewAll(Data?.data.detail);
    });
    console.log(viewAll);
    console.log(AllTrailer);
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
        All Trailer:
      </Heading>

      <Flex alignItems="center" ml="10">
        <ViewallTrailer rails={viewAll} />{" "}
      </Flex>
    </Flex>
  );
};

export default TrailerViewall;

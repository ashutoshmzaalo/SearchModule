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
import ViewallStar from "./ViewallStar";

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
    const viewStar = `https://staging.mzaalo.com/search/viewall?search=${search}&index=${catalog}&page=1`;
    const ViewStar = await fetch(viewStar);
    const AllStar = await ViewStar.json().then((Data) => {
      SetviewAll(Data?.data.detail);
    });
    console.log(viewAll);
    console.log(AllStar);
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
        All Stars:
      </Heading>

      <Flex alignItems="center" ml="10">
        <ViewallStar rails={viewAll} />{" "}
      </Flex>
    </Flex>
  );
};

export default TrailerViewall;

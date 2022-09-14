import { Flex, Heading } from "@chakra-ui/react";

import "./style.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ViewallOriginal from "./viewallOriginal";

const ClipsViewall = () => {
  const [viewAll, SetviewAll] = useState([]);
  let { search, catalog } = useParams();

  useEffect(() => {
    ViewAll();
  }, []);
  console.log(search);
  const ViewAll = async () => {
    const viewOriginal = `https://staging.mzaalo.com/search/viewall?search=${search}&index=${catalog}&page=1`;
    const ViewOriginal = await fetch(viewOriginal);

    const AllOriginal = await ViewOriginal.json().then((Data) => {
      SetviewAll(Data?.data.detail);
    });
    console.log(viewAll);
    console.log(AllOriginal);
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
        All Originals:
      </Heading>

      <Flex alignItems="center" ml="10">
        <ViewallOriginal rails={viewAll} />{" "}
      </Flex>
    </Flex>
  );
};

export default ClipsViewall;

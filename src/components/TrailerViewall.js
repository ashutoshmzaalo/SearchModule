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
import ReactPaginate from "react-paginate";

const TrailerViewall = () => {
  const [viewAll, SetviewAll] = useState([]);
  const [activePage, setActivePage] = useState(1);
  let { search, catalog } = useParams();

  const [totalpage, setTotalpage] = useState(0);

  const handlePageClick = async (data) => {
    // console.log(data.selected + 1);
    let Page = data.selected + 1;
    setActivePage(Page);
  };
  useEffect(() => {
    ViewAll();
  }, [activePage]);
  // console.log(search);
  const ViewAll = async () => {
    //let message = "baj";
    //let message = document.getElementById("message").value;
    const viewTrailer = `https://staging.mzaalo.com/search/viewall?search=${search}&index=${catalog}&page=${activePage}`;
    const ViewTrailer = await fetch(viewTrailer);
    const AllTrailer = await ViewTrailer.json().then((Data) => {
      SetviewAll(Data?.data.detail);

      let totalPages = Math.ceil(Data?.data?.count / 10);
      setTotalpage(totalPages);
    });
    // console.log(viewAll);
    // console.log(AllTrailer);
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
      <Flex alignItems="center" ml="40%" mb="20">
        <ReactPaginate
          previousLabel={"<"}
          breakLabel={"..."}
          nextLabel={">"}
          pageCount={totalpage}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={`page-link`}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        ></ReactPaginate>
      </Flex>
    </Flex>
  );
};

export default TrailerViewall;

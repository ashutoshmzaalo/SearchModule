import Viewalls from "./Viewalls";
import { Flex, Grid, Link, Box, Image, Heading } from "@chakra-ui/react";

import "./style.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MoviesViewall = () => {
  const [viewAll, SetviewAll] = useState([]);
  useEffect(() => {
    ViewAll();
  }, []);
  const ViewAll = async () => {
    let { message } = useParams();
    // let message = document.getElementById("message").value;
    const viewMovie = `https://staging.mzaalo.com/search/viewall?search=${message}&index=movie&page=1`;
    const ViewMovie = await fetch(viewMovie);
    const AllMovie = await ViewMovie.json().then((Data) => {
      SetviewAll(Data?.data.detail);
    });
    //console.log(viewAll);
  };

  return <Viewalls rails={viewAll} />;
};

export default MoviesViewall;

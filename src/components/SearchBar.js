import {
  Flex,
  Heading,
  Box,
  Button,
  Image,
  Text,
  Grid,
  Container,
} from "@chakra-ui/react";
import { Link, Router, Routes, Route } from "react-router-dom";
import ViewAll from "./MoviesViewall";

import { useState, useEffect } from "react";

import { Alert, AutoComplete } from "antd";
import Movies from "./Movies";
import Clips from "./Clips";
import Originals from "./Originals";
import Trailers from "./Trailers";
import Stars from "./Stars";
import MoviesViewall from "./MoviesViewall";

const SearchBar = () => {
  const [message, setMessage] = useState("");
  const [rails, setRails] = useState([]);
  const [clipRails, setClipRails] = useState([]);
  const [originalRails, setOriginalRails] = useState([]);
  const [trailerRails, setTrailerRails] = useState([]);
  const [starRails, setStarRails] = useState([]);
  const [auto, setAuto] = useState([]);
  const [allMovie, SetallMovies] = useState([]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  const { Option } = AutoComplete;
  const handleChange = (event) => {
    setMessage(event);
    getData();
    console.log("value is:", event.target.value);
  };

  async function getData(e) {
    const viewMovie = `https://staging.mzaalo.com/search/viewall?search=${message}&index=movie&page=1`;
    const ViewMovie = await fetch(viewMovie);
    const AllMovie = await ViewMovie.json().then((Data) => {
      SetallMovies(Data?.data.detail);
    });

    const viewClip = `https://staging.mzaalo.com/search/viewall?search=${message}&index=clips&page=1`;
    const ViewClip = await fetch(viewMovie);

    const viewStar = `https://staging.mzaalo.com/search/viewall?search=${message}&index=star&page=1`;
    const ViewStar = await fetch(viewMovie);

    const viewOriginal = `https://staging.mzaalo.com/search/viewall?search=${message}&index=original&page=1`;
    const ViewOriginal = await fetch(viewMovie);

    const viewTailer = `https://staging.mzaalo.com/search/viewall?search=${message}&index=Tailer&page=1`;
    const ViewTailer = await fetch(viewMovie);

    const URL = `https://staging.mzaalo.com/search/catalog/${message}`;
    const url = `https://staging.mzaalo.com/search/autocomplete/${message}`;
    const response = await fetch(url);
    const Response = await fetch(URL);
    const clips = await fetch(URL);
    const original = await fetch(URL);
    const trailer = await fetch(URL);
    const star = await fetch(URL);
    const Cataloog = await Response.json().then((Data) => {
      setRails(Data?.data.movie.data);
    });
    const autoCom = await response.json().then((data) => {
      setAuto(data?.data);
    });
    const Clip = await clips.json().then((Data) => {
      setClipRails(Data?.data.clip.data);
    });
    const Original = await original.json().then((Data) => {
      setOriginalRails(Data?.data.original.data);
    });
    const Trailer = await trailer.json().then((Data) => {
      setTrailerRails(Data?.data.trailer.data);
    });
    const Star = await star.json().then((Data) => {
      setStarRails(Data?.data.star.data);
    });

    //console.log(autoCom);
    //console.log(Cataloog);
    console.log(e.target.value);
  }
  console.log(allMovie);
  //console.log(starRails);
  // console.log(trailerRails);
  //console.log(originalRails);
  // console.log(clipRails);
  console.log(rails);

  return (
    <Flex>
      <Flex
        as="header"
        align="center"
        justify="space-between"
        wrap="wrap"
        backgroundColor="whiteAlpha.300"
        py="6"
        px="6"
        w="100%"
        top="0"
        mb=""
        pos="fixed"
        zIndex="2"
        rounded={"sm"}
      >
        <Flex align="center" mr="5">
          <Heading
            as="h1"
            color="#A27B5C"
            fontWeight="bold"
            size="md"
            letterSpacing="md"
          >
            <div _hover={{ color: "#eeeeee", textDecor: "none" }}>MZAALO</div>
          </Heading>
        </Flex>
        <Flex
          marginRight={"50px"}
          align="right"
          backgroundColor="#DCD7C9"
          position="relative"
        >
          <AutoComplete
            id="message"
            style={{ width: 200, border: 4, backgroundColor: "#3F4E4F " }}
            backgroundColor="none"
            onSearch={(e) => handleChange(e)}
            textColor="white"
            placeholder="input here"
          >
            {auto?.map((data) => (
              <Option key={data} value={data}>
                {data}
              </Option>
            ))}
          </AutoComplete>
        </Flex>
      </Flex>
      {/* <Flex flexDirection="column">
        {" "}
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={5}
        >
          <ButtonBack>Back</ButtonBack>
          <Slider>
            <Flex flexDirection="row">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </Flex>
          </Slider>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
        <Flex>
          <Card />
          <Card />
          <Card />
          <Card />
        </Flex>
      </Flex> */}

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
          Movies:
        </Heading>
        <Button
          ml="1330"
          mr="5"
          as="h1"
          fontWeight="bold"
          size="md"
          letterSpacing="md"
          color="blue.400"
          background="none"
        >
          <Link to={`/MoviesViewall?search=${message}`}>View All</Link>
        </Button>

        <Movies rails={rails} />
        <Heading
          as="h1"
          color="gray.50"
          fontWeight="bold"
          size="md"
          letterSpacing="md"
          Color="white"
          mt="20"
          ml="20"
        >
          Originals:
        </Heading>

        <Originals originalRails={originalRails} />
        <Heading
          as="h1"
          color="gray.50"
          fontWeight="bold"
          size="md"
          letterSpacing="md"
          Color="white"
          mt="20"
          ml="20"
        >
          Trailers:
        </Heading>

        <Trailers trailerRails={trailerRails} />
        <Heading
          as="h1"
          color="gray.50"
          fontWeight="bold"
          size="md"
          letterSpacing="md"
          Color="white"
          mt="20"
          ml="20"
        >
          Clips:
        </Heading>

        <Clips clipRails={clipRails} />
        <Heading
          as="h1"
          color="gray.50"
          fontWeight="bold"
          size="md"
          letterSpacing="md"
          Color="white"
          mt="20"
          ml="20"
        >
          Stars:
        </Heading>

        <Stars starRails={starRails} />
      </Flex>
    </Flex>
  );
};

export default SearchBar;

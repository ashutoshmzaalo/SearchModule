import { Flex, Heading, Button } from "@chakra-ui/react";
import { Link, Router, Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";

import { Alert, AutoComplete } from "antd";
import Movies from "./Movies";
import Clips from "./Clips";
import Originals from "./Originals";
import Trailers from "./Trailers";
import Stars from "./Stars";
import "./count.css";
import Trending from "./trendingSearch";

const SearchBar = () => {
  const [message, setMessage] = useState("");
  const [rails, setRails] = useState([]);
  const [clipRails, setClipRails] = useState([]);
  const [originalRails, setOriginalRails] = useState([]);
  const [trailerRails, setTrailerRails] = useState([]);
  const [starRails, setStarRails] = useState([]);
  const [auto, setAuto] = useState([]);
  const [allMovie, SetallMovies] = useState([]);
  const [trends, setTrends] = useState([]);
  const [moviecount, setMoviecount] = useState(0);
  const [originalcount, setOriginalcount] = useState(0);
  const [trailercount, setTrailercount] = useState(0);
  const [clipcount, setClipcount] = useState(0);
  const [starcount, setStarcount] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  const { Option } = AutoComplete;
  const handleChange = (event) => {
    localStorage.setItem("message", event);
    setMessage(event);

    console.log("value is:", event.target.value);
  };

  async function getData(e) {
    console.log("message", message);
    const URL = `https://staging.mzaalo.com/search/catalog/${message}`;
    const url = `https://staging.mzaalo.com/search/autocomplete/${message}`;
    const Trending = `https://staging.mzaalo.com/search/get/trendingSearch `;
    const Trend = await fetch(Trending);
    const trending = await Trend.json().then((Data) => {
      setTrends(Data?.data.detail);
    });
    const response = await fetch(url);
    const Response = await fetch(URL);
    const clips = await fetch(URL);
    const original = await fetch(URL);
    const trailer = await fetch(URL);
    const star = await fetch(URL);
    const Cataloog = await Response.json().then((Data) => {
      setRails(Data?.data.movie.data);
      setMoviecount(Data?.data?.movie?.count);
    });
    const autoCom = await response.json().then((data) => {
      setAuto(data?.data);
    });
    const Clip = await clips.json().then((Data) => {
      setClipRails(Data?.data.clip.data);
      setClipcount(Data?.data?.clip?.count);
    });
    const Original = await original.json().then((Data) => {
      setOriginalRails(Data?.data.original.data);
      setOriginalcount(Data?.data?.original?.count);
    });
    const Trailer = await trailer.json().then((Data) => {
      setTrailerRails(Data?.data.trailer.data);
      setTrailercount(Data?.data?.trailer?.count);
    });
    const Star = await star.json().then((Data) => {
      setStarRails(Data?.data.star.data);
      setStarcount(Data?.data?.star?.count);
    });

    //console.log(trending);
    //console.log(autoCom);
    //console.log(Cataloog);
    //console.log(e.target.value);
    console.log(trending);
  }
  useEffect(() => {
    console.log(localStorage.getItem("message"), "check");
    if (localStorage.getItem("message") !== "") {
      setMessage(localStorage.getItem("message"));
    }
  }, []);

  useEffect(() => {
    if (message.length >= 3) {
      getData();
    }
    console.log(message.length);
  }, [message]);

  //console.log(allMovie);
  //console.log(starRails);
  // console.log(trailerRails);
  //console.log(originalRails);
  //console.log(clipRails);
  // console.log(rails, "check");

  return (
    <Flex>
      <Flex
        as="header"
        align="center"
        justify="space-between"
        wrap="wrap"
        bgColor="whiteAlpha.300"
        py="6"
        px="6"
        w="100%"
        top="0"
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
          //color="#DCD7C9"
          position="relative"
        >
          <AutoComplete
            id="message"
            className="inputSearch"
            style={{ width: 200, border: 4 }}
            onSearch={(e) => handleChange(e)}
            placeholder="input here"
            //defaultValue={message}
          >
            {auto?.map((data) => (
              <Option key={data} value={data}>
                {data}
              </Option>
            ))}
          </AutoComplete>
        </Flex>
      </Flex>
      <Flex flexDirection="column">
        {moviecount !== 0 && (
          <>
            <Heading
              as="h1"
              color="gray.50"
              fontWeight="bold"
              size="md"
              letterSpacing="md"
              mt="10%"
              ml="20"
            >
              Movies:
            </Heading>
            <Button
              ml="1280"
              mr="5"
              as="h1"
              fontWeight="bold"
              size="md"
              letterSpacing="md"
              color="blue.400"
              background="none"
            >
              <Link to={`/MoviesViewall/${message}/movie`}>
                View All {""}({moviecount})
              </Link>
            </Button>

            <Movies rails={rails} />
          </>
        )}
        {originalcount !== 0 && (
          <>
            <Heading
              as="h1"
              color="gray.50"
              fontWeight="bold"
              size="md"
              letterSpacing="md"
              Color="white"
              mt="10"
              ml="20"
            >
              Originals:
            </Heading>
            <Button
              ml="1280"
              mr="5"
              as="h1"
              fontWeight="bold"
              size="md"
              letterSpacing="md"
              color="blue.400"
              background="none"
            >
              <Link to={`/OriginalViewall/${message}/original`}>
                View All {""}({originalcount})
              </Link>
            </Button>

            <Originals originalRails={originalRails} />
          </>
        )}
        {trailercount !== 0 && (
          <>
            <Heading
              as="h1"
              color="gray.50"
              fontWeight="bold"
              size="md"
              letterSpacing="md"
              Color="white"
              mt="10"
              ml="20"
            >
              Trailers:
            </Heading>
            <Button
              ml="1280"
              mr="5"
              as="h1"
              fontWeight="bold"
              size="md"
              letterSpacing="md"
              color="blue.400"
              background="none"
            >
              <Link to={`/TrailerViewall/${message}/trailer`}>
                View All {""}({trailercount})
              </Link>
            </Button>
            <Trailers trailerRails={trailerRails} />
          </>
        )}
        {clipcount !== 0 && (
          <>
            <Heading
              as="h1"
              color="gray.50"
              fontWeight="bold"
              size="md"
              letterSpacing="md"
              Color="white"
              mt="10"
              ml="20"
            >
              Clips:
            </Heading>
            <Button
              ml="1280"
              mr="5"
              as="h1"
              fontWeight="bold"
              size="md"
              letterSpacing="md"
              color="blue.400"
              background="none"
            >
              <Link to={`/ClipsViewall/${message}/clip`}>
                View All {""}({clipcount})
              </Link>
            </Button>

            <Clips clipRails={clipRails} />
          </>
        )}
        {starcount !== 0 && (
          <>
            <Heading
              as="h1"
              color="gray.50"
              fontWeight="bold"
              size="md"
              letterSpacing="md"
              Color="white"
              mt="10"
              ml="20"
            >
              Stars:
            </Heading>
            <Button
              ml="1280"
              mr="5"
              as="h1"
              fontWeight="bold"
              size="md"
              letterSpacing="md"
              color="blue.400"
              background="none"
            >
              <Link to={`/StarViewall/${message}/star`}>
                View All {""}({starcount})
              </Link>
            </Button>

            <Stars starRails={starRails} />
          </>
        )}
        <Heading
          as="h1"
          color="gray.50"
          fontWeight="bold"
          size="md"
          letterSpacing="md"
          Color="white"
          mt="5%"
          ml="20"
        >
          Trending Search:
        </Heading>
        {/* <Button
          ml="1280"
          mr="5"
          as="h1"
          fontWeight="bold"
          size="md"
          letterSpacing="md"
          color="blue.400"
          background="none"
        >
          <Link to={``}>
            View All {""}({})
          </Link>
        </Button> */}
        <Trending trends={trends} />
      </Flex>
    </Flex>
  );
};

export default SearchBar;

import { Flex } from "@chakra-ui/react";

import SearchBar from "./components/SearchBar";

import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MoviesViewall from "./components/MoviesViewall";
import ClipsViewall from "./components/ClipsViewall";
import OriginalViewall from "./components/OriginalViewall";
import TrailerViewall from "./components/TrailerViewall";
import StarViewall from "./components/StarViewall";

const App = () => {
  return (
    <BrowserRouter>
      <Flex
        as="main"
        direction={{ base: "column", md: "column" }}
        bgColor="#2C3639"
      >
        <Routes>
          <Route
            path="/StarViewall/:search/:catalog"
            element={<StarViewall />}
          />
          <Route
            path="/TrailerViewall/:search/:catalog"
            element={<TrailerViewall />}
          />
          <Route
            path="/OriginalViewall/:search/:catalog"
            element={<OriginalViewall />}
          />
          <Route
            path="/ClipsViewall/:search/:catalog"
            element={<ClipsViewall />}
          />
          <Route
            path="/MoviesViewall/:search/:catalog"
            element={<MoviesViewall />}
          />
          <Route path="/" element={<SearchBar />} />
        </Routes>
      </Flex>
    </BrowserRouter>
  );
};

export default App;

import { Flex } from "@chakra-ui/react";

import SearchBar from "./components/SearchBar";
import handleChange from "./components/SearchBar";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviesViewall from "./components/MoviesViewall";
const App = () => {
  return (
    <>
      <Flex
        as="main"
        direction={{ base: "column", md: "column" }}
        backgroundColor="#2C3639"
      >
        <Router>
          <Routes>
            <Route path={`/MoviesViewall`} element={<MoviesViewall />} />
            <Route path="/" element={<SearchBar />} />
          </Routes>
        </Router>
      </Flex>
    </>
  );
};

export default App;

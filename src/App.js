import { Component, useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import {
  PRE_API_URL,
  getMoviesUrl,
  options,
} from "./string-constants/api-urls";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchField, setSearchField] = useState(movies);

  useEffect(() => {
    const filterMovies = (searchQuery) => {
      options.method = "GET";
      fetch(
        PRE_API_URL +
          `search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`,
        options
      )
        .then((res) => res.json())
        .then((responseJson) => {
          setMovies({ movies: responseJson });
        });
      setSearchField(searchQuery);
    };
  }, [movies, searchField]);

  useEffect(() => {
    console.log("effect fired");
    options.method = "GET";
    fetch(PRE_API_URL + getMoviesUrl, options)
      .then((res) => res.json())
      .then((json) => {
        setMovies({ movies: json });
      });
  }, []);

  return (
    <div className="App">
      {/* <SearchBox className="search-box" placeHolder="Search Movies" onHandleSearchQuery={filterMovies} /> */}
      <CardList filteredMovies={movies} />
    </div>
  );
};

export default App;

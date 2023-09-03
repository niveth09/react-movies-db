import { Component } from "react";
import "./search-box.styles.css";
import { PRE_API_URL, options } from "../../string-constants/api-urls";
const SearchBox = ({ className, placeHolder, onHandleSearchQuery }) => {
  //   filterMovies(searchQuery) {
  //     options.method = "GET";

  //     fetch(
  //       PRE_API_URL +
  //         `search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`,
  //       this.options
  //     )
  //       .then((res) => res.json())
  //       .then((json) => {
  //         this.setState(() => {
  //           return { movies: json.results };
  //         });
  //       });
  //   }

  return (
    <input
      type="search"
      onChange={(event) => {
        onHandleSearchQuery(event.target.value);
      }}
    />
  );
};
export default SearchBox;

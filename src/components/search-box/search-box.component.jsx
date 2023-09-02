import { Component } from "react";
import "./search-box.styles.css";
class SearchBox extends Component {
  PRE_API_URL = "https://api.themoviedb.org/3/";
  API_KEY = "1f4530e22cc8d7f3e0bdd2f0fde50d87";
  API_TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjQ1MzBlMjJjYzhkN2YzZTBiZGQyZjBmZGU1MGQ4NyIsInN1YiI6IjY0ZjAyNDFkM2E5OTM3MDBlMmY3NzU0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9--_LBM-h3yqjp0yjyJh2l02g_yua2Vnh4YCYOMNlJo";
  options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${this.API_TOKEN}`,
    },
  };
  filterMovies(searchQuery) {
    this.options.method = "GET";

    fetch(
      this.PRE_API_URL +
        `search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`,
      this.options
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState(() => {
          return { movies: json.results };
        });
      });
  }
  render() {
    return (
      <input
        className="search-box"
        type="search"
        placeholder="Search Movie"
        onChange={(event) => {
          this.props.onHandleSearchQuery(event.target.value);
        }}
      />
    );
  }
}
export default SearchBox;

import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import {
  PRE_API_URL,
  getMoviesUrl,
  options,
} from "./string-constants/api-urls";
class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      searchField: "",
    };
  }
  filterMovies = (searchQuery) => {
    options.method = "GET";
    fetch(
      PRE_API_URL +
        `search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((resJson) => {
        this.setState({ movies: resJson });
      });
  };
  getMovies() {
    options.method = "GET";
    const getMoviesFullUrl = PRE_API_URL + getMoviesUrl;
    fetch(getMoviesFullUrl, options)
      .then((res) => res.json())
      .then((json) => {
        this.setState(() => {
          return { movies: json };
        });
      });
  }
  componentDidMount() {
    this.getMovies();
  }

  render() {
    return (
      <div className="App">
        <SearchBox onHandleSearchQuery={this.filterMovies} />
        <CardList filteredMovies={this.state.movies} />
      </div>
    );
  }
}

export default App;

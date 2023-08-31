import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import APIs from "./components/interceptor/Apis";
class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) =>
        this.setState(() => {
          return { movies: json };
        })
      );
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.movies.map((movie) => {
            return (
              <div key={movie.id} class="movie">
                {movie.title}
              </div>
            );
          })}
        </header>
      </div>
    );
  }
}

export default App;

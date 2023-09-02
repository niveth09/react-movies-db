import { Component } from "react";
import { getMoviesList } from "../../services/Api.service";
import { Card } from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }
  componentDidMount() {
    //   let moviesDetails = async () => this.setState(() => { await getMoviesList() });
    // console.log(moviesDetails);
  }
  render() {
    const filteredMovies = this.props.filteredMovies.results;
    console.log(filteredMovies);

    return filteredMovies ? (
      <div className="card-list">
        {filteredMovies.map((movie) => {
          return <Card movie={movie} />;
        })}
      </div>
    ) : null;
  }
}

export default CardList;

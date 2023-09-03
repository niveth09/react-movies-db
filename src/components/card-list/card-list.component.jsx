import { Component } from "react";
import { getMoviesList } from "../../services/Api.service";
import { Card } from "../card/card.component";
import "./card-list.styles.css";

const CardList = (props) => {
  //     //   let moviesDetails = async () => this.setState(() => { await getMoviesList() });

  const filteredMovies = props.filteredMovies?.movies?.results;

  return filteredMovies ? (
    <div className="card-list">
      {filteredMovies.map((movie) => {
        return <Card movie={movie} />;
      })}
    </div>
  ) : null;
};

export default CardList;

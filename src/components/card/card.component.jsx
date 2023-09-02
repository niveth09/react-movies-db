import { Component } from "react";
import "./card.styles.css";

export class Card extends Component {
  render() {
    const movie = this.props.movie;
    console.log(movie);
    return (
      <div key={movie.id} className="card-container">
        <img src="../../assets/monster.png" />
        {movie.title}
        {movie.rating}
      </div>
    );
  }
}
// export default Card;

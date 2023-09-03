import { Component } from "react";
import "./card.styles.css";

export const Card = ({ movie }) => {
  const { id, title, rating } = movie;
  return (
    <div key={id} className="card-container">
      <img src="../../assets/monster.png" />
      {title}
      {rating}
    </div>
  );
};
export default Card;

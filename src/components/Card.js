import React from "react";
import '../Card.css';

const Card = ({ id, name, email }) => {
  return (
    <div className="bg-light-yellow dib br3 pa3 ma2 grow bw4 shadow-5">
      <img alt="robots" src={"https://robohash.org/" + id + "?set=set4"} />
      <div className="card">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import Card from "./Card";

const CardList = ( {cats} ) => {
  return (
    <div>
      {cats.map((cat, i) => {
        const {id, name, email} = cat;
        return (
          <Card
            key={i}
            id={id}
            name={name}
            email={email}
          />
        );
      })}
    </div>
  );
};

export default CardList;

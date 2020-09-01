import React, { useState } from "react";

const CardEffect = (props) => {
  const card = "card";
  const hoverCard = "hoverCard";

  const [cardClass, setCardClass] = useState(card);

  const { id, imageUrlHiRes, name } = props.pokemon;

  const altText = `${name}'s Pokemon Card`;

  return (
    <li key={props.index + id} className="pokeCard">
      <div
        style={{ backgroundImage: `url("${imageUrlHiRes}")` }}
        onMouseEnter={() => {
          setCardClass(hoverCard);
        }}
        onMouseLeave={() => {
          setCardClass(card);
        }}
        className={cardClass}
        alt={altText}
      ></div>
    </li>
  );
};

export default CardEffect;

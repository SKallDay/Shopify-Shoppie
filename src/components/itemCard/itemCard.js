import React from "react";
import './itemCard.css'

// react component
export const ItemCard = ({
  item,
  nominations,
  getNomination,
}) => {
  return (
    <div className="itemCard__container">
      <img  className="itemCard__image" src={item.Poster} alt="movie Poster"></img>
      <p>{item.Title}</p>
      <p>{item.Year}</p>

      {nominations.some((e) => e.Title === item.Title) ? (
        <button>disabled</button>
      ) : (
        <button onClick={() => getNomination(item)}>nominate</button>
      )}
    </div>
  );
};

// export
export default ItemCard;

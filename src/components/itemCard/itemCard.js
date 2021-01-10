import React from "react";
import "./itemCard.css";

// react component
export const ItemCard = ({ item, nominations, getNomination }) => {
  return (
    <div className="itemCard__container">
      <img
        className="itemCard__image"
        src={item.Poster}
        alt="movie Poster"
      ></img>
      <h5 className="itemCard__text">{item.Title}({item.Year})</h5>
      {nominations.some((e) => e.Title === item.Title) ? (
        <button className="itemCard__button disabled">Nominate</button>
      ) : (
        <button
          className="itemCard__button"
          onClick={() => getNomination(item)}
        >
          Nominate
        </button>
      )}
    </div>
  );
};

// export
export default ItemCard;

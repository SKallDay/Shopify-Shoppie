import React from "react";
import "./itemCard.css";

export const ItemCard = ({ item, nominations, addToNominations }) => {
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
          onClick={() => addToNominations(item)}
        >
          Nominate
        </button>
      )}
    </div>
  );
};

// export
export default ItemCard;

import React from "react";
import "./itemCard.css";

export const ItemCard = ({ item, nominations, addToNominations }) => {
  return (
    <div className="itemCard__container" data-testid="item-card">
      <img
        className="itemCard__image"
        src={item.Poster}
        alt={`${item.Title} movie poster`}
      ></img>
      <h5 className="itemCard__text">{item.Title} ({item.Year})</h5>
      {nominations.some((e) => e.Title === item.Title && e.Year === item.Year) ? (
        <button className="itemCard__button disabled" data-testid="disabled">Nominate</button>
      ) : (
        <button
          data-testid="add-to-nominations"
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

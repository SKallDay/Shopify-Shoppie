import React from 'react';

// react component
export const ItemCard = ({
  Title,
  Year,
  Poster,
}) => {

  return (
   <>
    <img src={Poster} alt="movie Poster"></img>
    <p>{Title}</p>
    <p>{Year}</p>
   </>
  );
};

// export
export default ItemCard;
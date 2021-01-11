import React from "react";
import ItemCard from "../itemCard/itemCard";
import "./queryList.css";

export const QueryList = ({
  queryResults,
  addToNominations,
  nominations,
  query,
}) => {
  const getNomination = (item) => {
    addToNominations(item);
  };

  return (
    <div className="query__container">
      <h3 className="query__heading">
        {query ? `Movies result for "${query}"  Found: ` : "Movie results:"}
      </h3>
      <div className="query__itemCardContainer">
        {queryResults &&
          queryResults.map((item) => (
            <>
              <ItemCard
                item={item}
                nominations={nominations}
                getNomination={getNomination}
              ></ItemCard>
            </>
          ))}
      </div>
    </div>
  );
};

// export
export default QueryList;

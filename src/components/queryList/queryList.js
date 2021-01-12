import React from "react";
import ItemCard from "../itemCard/itemCard";
import "./queryList.css";
import CircularProgress from "@material-ui/core/CircularProgress";

export const QueryList = ({
  queryResults,
  addToNominations,
  nominations,
  query,
  loading,
}) => {
  const getNomination = (item) => {
    addToNominations(item);
  };

  return (
    <div className="query__container">
      <h3 className="query__heading">
        {query ? `Movies result for "${query}"  Found: ` : "Movie results:"}
      </h3>
      {!queryResults && 
        <div>
          <h4 className="query__text">Sorry No Movies found Yet ...</h4>
        </div>}
      {loading && (
        <div className="query__loadingState">
          <CircularProgress color="inherit" size={80} />
        </div>
      )}
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

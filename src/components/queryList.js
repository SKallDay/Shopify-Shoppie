import React from "react";
import ItemCard from "./itemCard";

// react component
export const QueryList = ({ queryResults, addToNominations, nominations }) => {
  console.log(nominations);

  const getNomination = (item) => {
    addToNominations(item);
  };

  return (
    <>
      <h3>Query List</h3>
      <div className="queryListContainer">
        {queryResults
          && queryResults.map((item) => (
              <>
              {/* <ItemCard Title={item.Title} Year={item.Year} Poster={item.Poster}></ItemCard> */}
                <p>
                  {item.Title}
                </p>
                <p>
                  {item.Year}
                </p>
                <img src={item.Poster} alt="movie Poster"></img>
                {nominations.some((e) => e.Title === item.Title) ? (
                  <button>disabled</button>
                ) : (
                  <button onClick={() => getNomination(item)}>nominate</button>
                )}
              </>
            ))
          }
      </div>
    </>
  );
};

// export
export default QueryList;

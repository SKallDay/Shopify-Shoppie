import React, { useState, useEffect } from "react";
import SearchBar from "./components/searchBar";
import Nomiations from "./components/nomination";
import QueryList from "./components/queryList";
import Banner from "./components/banner";

function App() {
  const [nominations, setNominations] = useState([]);
  const [query, setQuery] = useState("");
  const [queryResults, setQueryResults] = useState([]);

  const APP_KEY = "97b773a7";
  const url = `http://www.omdbapi.com/?apikey=${APP_KEY}&s=${query}`;

  useEffect(() => {
    fetchMovies();
  }, [query]);

  const fetchMovies = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setQueryResults(data.Search);
  };


  const queryBySearch = (value) => {
    setQuery(value);
  };

  const addToNominations = (item) => {
    const Noms = [...nominations, item];
    setNominations(Noms);
  };

  const removeNominee = (item) => {
    const filteredNoms = [...nominations].filter(
      (items) => items.Title !== item.Title
    );
    setNominations(filteredNoms);
  };

  return (
    <div className="App">
      <h1>The Shoppies</h1>
      <SearchBar queryBySearch={queryBySearch} />
      <Nomiations nominations={nominations} removeNominee={removeNominee} />
      <QueryList
        queryResults={queryResults}
        addToNominations={addToNominations}
        nominations={nominations}
      />
      {nominations.length > 4 && <Banner />}
    </div>
  );
}

export default App;

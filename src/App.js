import React, { useState, useEffect } from "react";
import SearchBar from "./components/searhBar/searchBar";
import Nomiations from "./components/nomination/nomination";
import QueryList from "./components/queryList/queryList";
import Banner from "./components/banner/banner";
import './App.css';

function App() {
  const [nominations, setNominations] = useState([]);
  const [query, setQuery] = useState("");
  // const [queryResults, setQueryResults] = useState([]);

  const APP_KEY = "97b773a7";
  const url = `http://www.omdbapi.com/?apikey=${APP_KEY}&s=${query}`;

  // useEffect(() => {
  //   fetchMovies();
  // }, [query]);

  // const fetchMovies = async () => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setQueryResults(data.Search);
  // };

  const queryResults = [
    {
      Title: "harry potter - test 1",
      Year: "2001",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
      Title: "harry potter test 2 ",
      Year: "2001",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
      Title: "harry potter test 3",
      Year: "2001",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
      Title: "harry potter - test 4",
      Year: "2001",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
      Title: "harry potter - test 5",
      Year: "2001",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
  ];



  const queryBySearch = (value) => {
    setQuery(value);
  };

  const addToNominations = (item) => {
    // add conditional if nominations less then 5 add
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
      <main className="app__main">
        <header className="app__header">
          <h1 className="app__heading">The Shoppies</h1>
        </header>
        <SearchBar queryBySearch={queryBySearch} />
        <section className="app__querySection">
        <QueryList
          queryResults={queryResults}
          addToNominations={addToNominations}
          nominations={nominations}
          query={query}
        />
        <Nomiations nominations={nominations} removeNominee={removeNominee} />
        </section>
      </main>
      <footer>
        {nominations.length > 4 && <Banner />}
      </footer>
    </div>
  );
}

export default App;

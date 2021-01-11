import React, { useState, useEffect } from "react";
import SearchBar from "./components/searhBar/searchBar";
import Nomiations from "./components/nomination/nomination";
import QueryList from "./components/queryList/queryList";
import Banner from "./components/banner/banner";
import swal from "sweetalert";
import "./App.css";

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
    if (nominations.length < 5) {
      const Noms = [...nominations, item];
      setNominations(Noms);
      swal(
        `${item.Title}`,
        "Has been added to your Nominations List!",
        "success"
      );
    }
  };

  const removeNominee = (item) => {
    swal(`You removed ${item.Title} from your nominations`, "", "warning");
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
        <SearchBar
          queryBySearch={queryBySearch}
          setQueryResults={setQueryResults}
        />
        <section className="app__querySection">
          <QueryList
            queryResults={queryResults}
            addToNominations={addToNominations}
            nominations={nominations}
            query={query}
          />
          <Nomiations
            nominations={nominations}
            removeNominee={removeNominee}
            queryResults={queryResults}
          />
        </section>
      </main>
      <footer>{nominations.length > 4 && <Banner />}</footer>
    </div>
  );
}

export default App;

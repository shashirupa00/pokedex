import { useEffect, useState } from "react";

import Header from "./Components/Header";
import RegionSelector from "./Components/RegionSelector";
import RegionPokemon from "./Components/RegionPokemon";

import "./index.css";

function App() {
  const [curPokemonList, setCurPokemonList] = useState([]);
  const [curRegion, setCurRegion] = useState("");
  const [regionPokemon, setRegionPokemon] = useState([]);

  useEffect(function () {
    async function fetchPokemon() {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1025");
        const data = await res.json();
        const pokemonUrls = await data.results.map((pokemon) => pokemon.url);
        const pokemonDataPromises = await pokemonUrls.map((url) =>
          fetch(url).then((response) => response.json())
        );
        const pokemonData = await Promise.all(pokemonDataPromises);
        setCurPokemonList(pokemonData);
        setRegionPokemon(pokemonData);
      } catch (error) {
        console.error("Something went wrong :(");
      }
    }
    fetchPokemon();
  }, []);

  const handleRegionClick = (regionName) => {
    setCurRegion(() => regionName);
    if (regionName === "Kanto") {
      setRegionPokemon(() =>
        curPokemonList.filter((pokemon) => pokemon.id < 152)
      );
    } else if (regionName === "Johto") {
      setRegionPokemon(() =>
        curPokemonList.filter((pokemon) => pokemon.id > 151 && pokemon.id < 252)
      );
    } else if (regionName === "Hoenn") {
      setRegionPokemon(() =>
        curPokemonList.filter((pokemon) => pokemon.id > 251 && pokemon.id < 387)
      );
    } else if (regionName === "Sinnoh") {
      setRegionPokemon(() =>
        curPokemonList.filter((pokemon) => pokemon.id > 386 && pokemon.id < 494)
      );
    } else if (regionName === "Unova") {
      setRegionPokemon(() =>
        curPokemonList.filter((pokemon) => pokemon.id > 493 && pokemon.id < 650)
      );
    } else if (regionName === "Kalos") {
      setRegionPokemon(() =>
        curPokemonList.filter((pokemon) => pokemon.id > 649 && pokemon.id < 722)
      );
    } else if (regionName === "Alola") {
      setRegionPokemon(() =>
        curPokemonList.filter((pokemon) => pokemon.id > 721 && pokemon.id < 810)
      );
    } else if (regionName === "Galar") {
      setRegionPokemon(() =>
        curPokemonList.filter((pokemon) => pokemon.id > 809 && pokemon.id < 906)
      );
    } else if (regionName === "Paldea") {
      setRegionPokemon(() =>
        curPokemonList.filter(
          (pokemon) => pokemon.id > 905 && pokemon.id < 1026
        )
      );
    }
  };

  return (
    <div>
      <Header setCurRegion={setCurRegion} />
      {/* <Dropdown /> */}
      <body>
        {curRegion === "" ? (
          <RegionSelector regionClickHandler={handleRegionClick} />
        ) : (
          <RegionPokemon regionPokemon={regionPokemon} />
        )}
      </body>
    </div>
  );
}

export default App;

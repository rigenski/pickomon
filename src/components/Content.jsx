import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Hero from "./Content/Hero/Hero";
import Card from "./Content/Card/Card";
import Button from "./Content/Button/Button";
import API from "./../services/index";

function Content() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonId, setPokemonId] = useState(1);
  const [more, setMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const getPokemons = async () => {
    try {
      const response = await axios(more);
      const result = response.data;

      setMore(result.next);
      setPokemonsObject(result.results);
    } catch (e) {
      console.log(e.message);
    }
  };

  const setPokemonsObject = (results) => {
    results.forEach((pokemon) => {
      API.getData("pokemon", pokemon.name).then(
        (result) => {
          setPokemons((currentList) => [...currentList, result]);
        },
        (err) => {
          console.log("error :", err.message);
        }
      );
    });
  };

  const setDetail = (id) => {
    setPokemonId(id);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <Fragment>
      <main className="w-5/5 mx-auto container mx-auto">
        <div id="hero" className="flex flex-row flex-wrap py-1">
          {pokemonId !== 0 ? <Hero id={pokemonId} /> : <div></div>}
        </div>
        <div id="pokemon-list" className="flex flex-row flex-wrap py-2">
          {pokemons.map((item, index) => {
            return <Card data={item} key={index} detail={setDetail} />;
          })}
        </div>
        <div className="flex justify-center">
          <Button getPokemons={getPokemons} />
        </div>
      </main>
    </Fragment>
  );
}

export default Content;

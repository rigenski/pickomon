import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Hero from "./Content/Hero/Hero";
import Card from "./Content/Card/Card";
import Button from "./Content/Button/Button";
import API from "./../services/index";

function Content() {
  const count = 18;
  const [pokemons, setPokemons] = useState([]);
  const [pokemonDetail, setPokemonDetail] = useState([2, "ivysaur"]);
  const [next, setNext] = useState(
    `https://pokeapi.co/api/v2/pokemon?limit=${count}`
  );

  const getPokemons = async () => {
    try {
      const response = await axios(next);
      const result = response.data;

      setNext(result.next);
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

  const handlePokemonDetail = (id, name) => {
    setPokemonDetail([id, name]);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <Fragment>
      <main>
        <div className="container mx-auto">
          <div id="hero" className="flex flex-row flex-wrap ">
            <Hero id={pokemonDetail[0]} name={pokemonDetail[1]} />
          </div>
          <div id="pokemons-list" className="flex flex-row flex-wrap ">
            {pokemons.map((item, index) => {
              return (
                <Card
                  data={item}
                  key={index}
                  setPokemonDetail={handlePokemonDetail}
                />
              );
            })}
          </div>
          <div id="load-more" className="flex justify-center py-2">
            <Button getPokemons={getPokemons} />
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default Content;

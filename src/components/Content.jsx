import React, { Fragment, useState, useEffect } from "react";
import Hero from "./Content/Hero/Hero";
import Card from "./Content/Card/Card";
import Button from "./Content/Button/Button";
import API from "./../services/index";

function Content() {
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async () => {
    API.getAllPokemons().then(
      (result) => {
        setPokemonsObject(result.results);
      },
      (err) => {
        console.log("error :", err.message);
      }
    );
  };

  const setPokemonsObject = (results) => {
    results.forEach((pokemon) => {
      API.getSpecPokemons("pokemon", pokemon.name).then(
        (result) => {
          setPokemons((currentList) => [...currentList, result]);
        },
        (err) => {
          console.log("error :", err.message);
        }
      );
    });
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <Fragment>
      <main className="w-5/5 mx-auto container mx-auto">
        <div id="hero" className="flex flex-row flex-wrap py-6">
          <Hero />
        </div>
        <div id="pokemon-list" className="flex flex-row flex-wrap py-6">
          {pokemons.map((item, index) => {
            return <Card data={item} key={index} />;
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

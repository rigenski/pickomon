import React, { Fragment, useEffect, useState } from "react";
import Card from "../../components/Content/Card/Card";
import API from "../../services";

function Favorite(props) {
  const [pokemonsId, setPokemonId] = useState([]);
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = () => {
    pokemonsId.forEach((id) => {
      API.getData("pokemon", id).then(
        (result) => {
          setPokemons((data) => [...data, result]);
        },
        (err) => {
          console.log("error :", err.message);
        }
      );
    });
  };

  useEffect(() => {
    setPokemonId(JSON.parse(localStorage.getItem("favorite")));
  }, []);

  useEffect(() => {
    getPokemons();
  }, [pokemonsId]);

  return (
    <Fragment>
      <main>
        <div className="container mx-auto">
          <div id="pokemons-list" className="flex flex-row flex-wrap ">
            {pokemons.map((item, index) => {
              return <Card data={item} key={index} />;
            })}
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default Favorite;

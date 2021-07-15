import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Hero from "../../components/Content/Hero/Hero";
import Card from "../../components/Content/Card/Card";
import Button from "../../components/Content/Button/Button";
import API from "../../services/index";

function Home(props) {
  const count = 24;
  const [pokemons, setPokemons] = useState([]);
  const [pokemonDetail, setPokemonDetail] = useState([2, "ivysaur"]);
  const [loading, isLoading] = useState(false);
  const [next, setNext] = useState(
    `https://pokeapi.co/api/v2/pokemon?limit=${count}`
  );

  const getPokemons = async () => {
    try {
      const response = await axios(next);
      const result = response.data;

      setNext(result.next);
      setPokemonsObject(result.results);

      isLoading(false);
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

  const handleLoadMore = () => {
    isLoading(true);
    getPokemons();
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
            {loading ? (
              <Button getPokemons={handleLoadMore} loading={true} />
            ) : (
              <Button getPokemons={handleLoadMore} loading={false} />
            )}
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default Home;

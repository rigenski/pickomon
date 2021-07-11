import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import API from "./../../../services/index";
import "./Hero.css";

function Hero(props) {
  const [pokemon, setPokemon] = useState([]);
  const [move, setMove] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [gender, setGender] = useState();
  const [habitat, setHabitat] = useState();
  const spec = ["pokemon", "move"];

  const getSpecPokemon = () => {
    API.getData("gender").then((result) => {
      getSpecGender(result.results);
    });
    API.getData("pokemon-habitat").then((result) => {
      getSpecHabitat(result.results);
    });
    spec.forEach((spec) => {
      API.getData(spec, props.id).then(
        (result) => {
          setSpecPokemon(result, spec);
        },
        (err) => {
          console.log("error :", err.message);
        }
      );
    });
  };

  const getSpecGender = (results) => {
    results.forEach(async (gender) => {
      try {
        const response = await axios.get(gender.url);
        const result = response.data;

        result.pokemon_species_details.forEach((detail) => {
          if (detail.pokemon_species.name === props.name) {
            setGender(result.name);
          }
        });
      } catch (e) {
        console.log(e.message);
      }
    });
  };

  const getSpecHabitat = (results) => {
    results.forEach(async (habitat) => {
      try {
        const response = await axios.get(habitat.url);
        const result = response.data;

        result.pokemon_species.forEach((detail) => {
          if (detail.name === props.name) {
            setHabitat(result.name);
          }
        });
      } catch (e) {
        console.log(e.message);
      }
    });
  };

  const setSpecPokemon = (result, spec) => {
    switch (spec) {
      case "pokemon":
        setPokemon(result);
        break;
      case "move":
        setMove(result);
        break;
    }
  };

  const handleFavorite = (id) => {
    setFavorite((data) => [...data, id]);
  };

  useEffect(() => {
    getSpecPokemon();
  }, [props.id]);

  useEffect(() => {
    if (!localStorage.getItem("favorite")) {
      localStorage.setItem("favorite", "[]");
    }

    setFavorite(JSON.parse(localStorage.getItem("favorite")));
  }, []);

  useEffect(() => {
    let dataArray = favorite.filter(function (elem, pos) {
      return favorite.indexOf(elem) == pos;
    });

    localStorage.setItem("favorite", JSON.stringify(dataArray));
  }, [favorite]);

  // useEffect(() => {
  // console.log(pokemon.id);
  // console.log(gender);
  // console.log(habitat);
  // console.log(characteristic.descriptions);
  // console.log(move);
  // console.log(color);
  // console.log(favorite);
  //   console.log(like);
  // }, [gender]);

  return (
    <Fragment>
      <div className="w-full md:w-7/12 p-2">
        <div className="w-full h-full flex items-center justify-center">
          <img
            src={pokemon.sprites?.other.dream_world.front_default}
            className="h-80"
            alt=""
          />
        </div>
      </div>
      <div className="w-full md:w-5/12 p-2">
        <div className="bg-white shadow-lg bg-opacity-30 rounded-md p-4 xl:p-8">
          <div className="flex-grow">
            <div className="flex justify-between">
              <div className="flex">
                {pokemon.types?.map((item, index) => {
                  return (
                    <h2
                      className={`uppercase text-xs rounded-lg font-bold text-white bg-${item.type.name} px-4 py-2 mr-2 my-auto`}
                      key={index}
                    >
                      {item.type.name}
                    </h2>
                  );
                })}
              </div>
              <div>
                {gender === "male" ? (
                  <i className="fas fa-mars text-4xl text-blue-400"></i>
                ) : gender === "female" ? (
                  <i className="fas fa-venus text-4xl text-pink-400"></i>
                ) : (
                  <i className="fas fa-genderless text-5xl text-green-400"></i>
                )}
              </div>
            </div>
            <h2 className="text-center capitalize font-bold text-gray-800 text-4xl mb-2 mt-4 ">
              {pokemon.name}
            </h2>
            <ul className="text-sm font-bold text-gray-800 mb-4">
              <li>
                <div className="flex justify-between">
                  <label>Power</label>
                  <label>{move.power ? move.power : 0} / 100</label>
                </div>
                <div className="w-full bg-gray-300 rounded my-2">
                  <div
                    className="bg-gradient-to-tr from-green-400 via-blue-500 to-purple-500 text-xs rounded py-1 text-center text-white"
                    style={{ width: `${move.power ? move.power : 0}%` }}
                  ></div>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <label>PP</label>
                  <label>{move.pp ? move.pp : 0} / 100</label>
                </div>
                <div className="w-full bg-gray-300 rounded my-2">
                  <div
                    className="bg-gradient-to-tr from-green-400 via-blue-500 to-purple-500 text-xs rounded py-1 text-center text-white"
                    style={{ width: `${move.pp ? move.pp : 0}%` }}
                  ></div>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <label>Accuracy</label>
                  <label>{move.accuracy ? move.accuracy : 0} / 100</label>
                </div>
                <div className="w-full bg-gray-300 rounded my-2">
                  <div
                    className="bg-gradient-to-tr from-green-400 via-blue-500 to-purple-500 text-xs rounded py-1 text-center text-white"
                    style={{ width: `${move.accuracy ? move.accuracy : 0}%` }}
                  ></div>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <label>Total</label>
                  <label>{move.power + move.pp + move.accuracy} / 300</label>
                </div>
                <div className="w-full bg-gray-300 rounded my-2">
                  <div
                    className="bg-gradient-to-tr from-green-400 via-blue-500 to-purple-400 text-xs rounded py-1 text-center text-white"
                    style={{
                      width: `${
                        ((move.power + move.pp + move.accuracy) * 100) / 300
                      }%`,
                    }}
                  ></div>
                </div>
              </li>
            </ul>
            <div className="w-full flex justify-between mb-4">
              <h2 className={`Capitalize font-bold text-gray-800`}>
                Habitat: <span className="capitalize">{habitat}</span>
              </h2>
              <h2 className={`Capitalize font-bold text-gray-800`}>
                {pokemon.weight} Weight / {pokemon.height} Height
              </h2>
            </div>
          </div>
          <div className="w-full">
            <button
              className="w-full font-bold text-white rounded-md px-10 py-2 bg-gradient-to-tr from-green-400 via-blue-500 to-purple-400 bg-opacity-80 transition ease-in duration-150 hover:from-purple-400 hover:via-green-500 hover:to-blue-400"
              onClick={() => handleFavorite(pokemon.id)}
            >
              Like a <span className="capitalize">{pokemon.name}</span>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Hero;

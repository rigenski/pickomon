import React, { Fragment, useEffect, useState } from "react";
import API from "./../../../services/index";
import "./Hero.css";

function Hero(props) {
  const [pokemon, setPokemon] = useState([]);
  const [habitat, setHabitat] = useState([]);
  const [gender, setGender] = useState([]);
  const [characteristic, setCharacter] = useState([]);
  const [move, setMove] = useState([]);
  const [color, setColor] = useState([]);
  const spec = [
    "pokemon",
    "habitat",
    "gender",
    "characteristic",
    "move",
    "color",
  ];

  const getSpecPokemon = () => {
    spec.forEach((spec) => {
      API.getData(
        spec === "habitat" || spec === "color" ? `pokemon-${spec}` : spec,
        props.id
      ).then(
        (result) => {
          setSpecPokemon(result, spec);
        },
        (err) => {
          console.log("error :", err.message);
        }
      );
    });
  };

  const setSpecPokemon = (result, spec) => {
    switch (spec) {
      case "pokemon":
        setPokemon(result);
        break;
      case "habitat":
        setHabitat(result);
        break;
      case "gender":
        setGender(result);
        break;
      case "characteristic":
        setCharacter(result);
        break;
      case "move":
        setMove(result);
        break;
      case "color":
        setColor(result);
        break;
    }
  };

  useEffect(() => {
    getSpecPokemon();
  }, [props.id]);

  useEffect(() => {
    // console.log(pokemon);
    // console.log(gender);
    // console.log(habitat);
    // console.log(characteristic.descriptions);
    // console.log(move);
    // console.log(color);
  }, [pokemon]);

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
        <div className="bg-white shadow-lg bg-opacity-30 rounded-md p-4 lg:p-8">
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
                {gender.name && gender.name === "male" ? (
                  <i className="fas fa-mars text-4xl text-blue-400"></i>
                ) : (
                  <i className="fas fa-venus text-4xl text-pink-400"></i>
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
                Habitat: <span className="capitalize">{habitat.name}</span>
              </h2>
              <h2 className={`Capitalize font-bold text-gray-800`}>
                {pokemon.weight} Weight / {pokemon.height} Height
              </h2>
            </div>
          </div>
          <div className="w-full">
            <button className="w-full font-bold text-white rounded-md px-10 py-2 bg-gradient-to-tr from-green-400 via-blue-500 to-purple-400 transform transition ease-in duration-150  hover:from-green-300 hover:via-blue-300 hover:via-blue-300">
              Like a <span className="capitalize">{pokemon.name}</span>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Hero;

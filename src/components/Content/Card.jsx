import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "./../../services/index";
import "./Card.css";

function Card(props) {
  const [gender, setGender] = useState([]);

  const getSpecPokemon = () => {
    API.getSpecPokemons("gender", props.data.id).then(
      (result) => {
        setGender(result);
      },
      (err) => {
        console.log("error :", err.message);
      }
    );
  };

  // const getSpecPokemon = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://pokeapi.co/api/v2/gender/${props.data.id}`
  //     );

  //     setGender(response.data);
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // };

  // const handleClick = (id) => {
  //   const dataItem = document.getElementById(id);
  //   const imageContainer =
  //     dataItem.children[0].children[0].children[0].children[1];
  //   const image = imageContainer.firstChild;

  //   // dataItem.className =
  //   //   "rounded-lg cursor-pointer bg-gradient-to-b transform scale-105 shadow-2xl from-yellow-100  to-yellow-300";
  //   // image.className = "mx-auto pt-4";
  // };

  useEffect(() => {
    getSpecPokemon();
  }, []);

  return (
    <div className="pokemon-item w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 w-1/2 p-2">
      <div
        className="card rounded-lg shadow-xl cursor-pointer bg-gradient-to-b transform transition ease-in duration-150 hover:scale-105 hover:shadow-2xl from-transparent to-transparent hover:from-yellow-100  hover:to-yellow-300"
        id={props.data.id}
        // onClick={() => handleClick(props.data.id)}
      >
        <div className="rounded-lg p-2 bg-white transform transition ease-in duration-150 hover:bg-opacity-0 bg-opacity-30 flex flex-col justify-center">
          <div className="border-2 border-white rounded-md bg-pokeball">
            <div className="px-2 pb-4 py-2">
              <div className="card-header grid">
                <div className="flex justify-between items-center text-gray-900">
                  <p className="font-bold text-blue-400 text-lg">
                    XP. {props.data.base_experience}
                  </p>
                  <p className="font-bold text-blue-400">
                    {gender.name && gender.name == "male" ? (
                      <i className="fas fa-mars text-3xl text-blue-400"></i>
                    ) : (
                      <i className="fas fa-venus text-3xl text-pink-400"></i>
                    )}
                  </p>
                </div>
              </div>
              <div className="card-img h-32">
                <img
                  src={props.data.sprites.front_default}
                  className="mx-auto pt-8"
                />
              </div>
              <div className="card-body text-center">
                <p className="text-lg uppercase text-gray-900 font-bold">
                  {props.data.name}
                </p>
                <div className="flex justify-center">
                  <p
                    className={`uppercase text-xs rounded-lg font-bold text-white bg-${props.data.types[0].type.name} px-2 py-1`}
                  >
                    {props.data.types[0].type.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

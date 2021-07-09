import React from "react";
import "./Card.css";

function Card(props) {
  const handleClick = (id) => {
    const dataItem = document.getElementById(id);
    const imageContainer =
      dataItem.children[0].children[0].children[0].children[1];
    const image = imageContainer.firstChild;

    // dataItem.className =
    //   "rounded-lg cursor-pointer bg-gradient-to-b transform scale-105 shadow-2xl from-yellow-100  to-yellow-300";
    // image.className = "mx-auto pt-4";
  };

  return (
    <div className="pokemon-item w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 w-1/2 p-2">
      <div
        className="card rounded-lg shadow-xl cursor-pointer bg-gradient-to-b transform transition ease-in duration-150 hover:scale-105 hover:shadow-2xl from-transparent to-transparent hover:from-yellow-100  hover:to-yellow-300"
        id={props.data.id}
        onClick={() => handleClick(props.data.id)}
      >
        <div className="rounded-lg p-2 bg-white transform transition ease-in duration-150 hover:bg-opacity-0 bg-opacity-30 flex flex-col justify-center">
          <div className="border-2 border-white rounded-md bg-pokeball">
            <div className=" p-4">
              <div className="card-header grid">
                <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                  <p className="font-bold text-lg text-blue-400">LV. 12</p>
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
                <p className="uppercase text-sm font-bold text-gray-600">
                  {props.data.types[0].type.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

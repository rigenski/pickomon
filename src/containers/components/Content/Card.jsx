import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 w-1/2 p-2">
      <div className="rounded-lg shadow-xl cursor-pointer bg-gradient-to-b   transform transition ease-in duration-150 hover:scale-105 hover:shadow-2xl from-transparent to-transparent hover:from-yellow-100  hover:to-yellow-200  ">
        <div className="card rounded-lg p-6 bg-white transform transition ease-in duration-150 hover:bg-opacity-0 bg-opacity-30 flex flex-col justify-center ">
          <div className="bg-pokeball">
            <div className="card-header grid">
              <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                <p className="font-bold text-lg text-blue-400">LV. 12</p>
              </div>
            </div>
            <div className="card-img mt-4">
              <img
                src={props.data.sprites.front_default}
                className="mx-auto animate-bounce"
              />
            </div>
            <div className="card-body text-center">
              <p className="text-lg uppercase text-gray-900 font-bold">
                {props.data.name}
              </p>
              <p className="uppercase text-sm text-gray-600">
                {props.data.types[0].type.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

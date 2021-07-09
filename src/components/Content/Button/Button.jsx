import React from "react";

function Button(props) {
  return (
    <div>
      <button className="rounded-lg shadow cursor-pointer bg-gradient-to-b transform transition ease-in duration-150  hover:shadow-lg from-transparent to-transparent hover:from-yellow-100 hover:to-yellow-300 border-b-2 border-blue-400">
        <div className="py-2 px-6 inline-flex items-center rounded-lg p-2 bg-white transform transition ease-in duration-150 hover:bg-opacity-0 bg-opacity-30">
          <span
            className="mr-2 font-medium"
            onClick={() => props.getPokemons()}
          >
            LOAD MORE
          </span>
          ...
        </div>
      </button>
    </div>
  );
}

export default Button;

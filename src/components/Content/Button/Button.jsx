import React, { Fragment, useEffect } from "react";

function Button(props) {
  return (
    <Fragment>
      <button className="rounded-lg shadow cursor-pointer border-b-2 border-blue-400 bg-gradient-to-b from-transparent to-transparent transform transition ease-in duration-150  hover:shadow-lg  hover:from-yellow-100 hover:to-yellow-300 ">
        <div className="rounded-lg flex items-center px-6 py-2 bg-white bg-opacity-30 transform transition ease-in duration-150 hover:bg-opacity-0">
          <span
            className="mr-2 font-medium text-gray-800"
            onClick={() => props.getPokemons()}
          >
            {props.loading ? "Loading" : "Load More"}
          </span>
          <span>
            {props.loading ? (
              <img
                src="https://media.tenor.com/images/69305e176c3858ae307c044d47823981/tenor.gif"
                alt=""
                className="h-5"
              />
            ) : (
              "..."
            )}
          </span>
        </div>
      </button>
    </Fragment>
  );
}

export default Button;

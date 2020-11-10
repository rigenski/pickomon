import React from  'react'
import pokeball from './../../../assets/img/pokeball.svg'

const Card = (props) => {
      return (
          <div className="sm:w-1/2 md:w-1/4 p-2 xl:w-1/5 lg:w-1/4"  key={props.id}>
            <div className="bg-white px-6 py-8 rounded-lg shadow-lg text-center ">
              <div className="mb-3 cursor-pointer" id="card">
                <div className="absolute mt-16 -ml-10 sm:ml-0 md:ml-0" id="pokeball">
                  <img
                    className="h-16 mx-auto w-full max-w-1/2  sm:w-64 md:w-32 lg:w-48  xl:w-48 cursor-pointer animate-bounce"
                    src={pokeball}
                    alt=""
                    />
                </div>
                  <img
                  className="w-full h-32 mx-auto rounded-lg "
                  src={props.data.sprites.other.dream_world.front_default}
                  alt=""
                  />
              </div>
              <h2 className="text-xl font-medium text-gray-700" >{props.data.name}</h2>
              <span className="text-blue-500 block " id="type-picko" >{props.data.types[0].type.name}</span>
            </div>
          </div>
        )
    }

export default Card;
import React, { Fragment, useState, useEffect } from "react";
import Card from "./Content/Card";
import axios from "axios";

function Content() {
  const [data, setData] = useState([]);
  const count = 20;

  const getData = async (id) => {
    try {
      const response = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const result = response.data;
      setData((data) => [...data, result]);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    for (let i = 1; i <= count; i++) {
      getData(i);
    }
  }, []);

  return (
    <Fragment>
      <div id="container" className="w-5/5 mx-auto container mx-auto">
        <div className="pokemon-list flex flex-row flex-wrap py-6">
          {data.map((item, index) => {
            return <Card data={item} key={index} />;
          })}
        </div>
      </div>
    </Fragment>
  );
}

export default Content;

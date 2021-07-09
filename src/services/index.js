import axios from "axios";
import { URL } from "./config";

const Get = (path, data) => {
  const promise = new Promise((resolve, reject) => {
    axios.get(`${URL}/${path}/${data}`).then(
      (result) => {
        resolve(result.data);
      },
      (err) => {
        reject(err);
      }
    );
  });

  return promise;
};

// GET

const getAllPokemons = () => Get("pokemon?limit=8");
const getSpecPokemons = (path, spec) => Get(path, spec);

const API = {
  getAllPokemons,
  getSpecPokemons,
};

export default API;

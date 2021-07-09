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

const getAllPokemons = () => Get("pokemon?limit=18");
const getSpecPokemons = (path, data) => Get(path, data);

const API = {
  getAllPokemons,
  getSpecPokemons,
};

export default API;

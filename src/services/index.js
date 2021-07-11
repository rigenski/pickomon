import axios from "axios";
import { URL } from "./config";

const Get = (path, data = "") => {
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

const getData = (path, data) => Get(path, data);

const API = {
  getData,
};

export default API;

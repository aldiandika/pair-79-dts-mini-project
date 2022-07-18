import axios from "axios";

const API_KEY = "b05b0bef835101289e13d0c705ae7c35";
const baseUrl = "https://api.themoviedb.org/3/";

const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
  },
});

export default tmdb;

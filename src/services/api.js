import axios from "axios";
import settings from "./settings";

const { BASE_URL, API_KEY } = settings;

axios.defaults.baseURL = BASE_URL;

export const getMovies = async (page = 1) => {
  const response = await axios.get(
    `/trending/movies/day?api_key=${API_KEY}&page=${page}`
  );

  return response.data.results;
};

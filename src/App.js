import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
// import movies from "./data/movies.json";
import { mapper } from "./utils/mapper";
import { getMovies } from "../src/services/api";
import { Button } from "./components/Button/Button";
import { GalleryList } from "./components/Gallery/GalleryList/GalleryList";
import Modal from "./components/Modal/Modal";

function App() {
  // state = {
  //   movies: mapper(movies),
  //   isShown: false,
  // };

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [image, setImage] = useState("");

  useEffect(() => {
    setIsLoading(true);
    getMovies()
      .then((results) => {
        const nextMovies = mapper(results);
        setMovies((prevMovies) => [...prevMovies, ...nextMovies]);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, [page]);

  const onClick = () => {
    const nextPage = page + 1;
    setPage(nextPage);
  };

  const openModal = (image) => {
    setImage(image);
  };

  const closeModal = () => {
    setImage("");
  };

  // const toggleWatched = (id) => {
  //   // console.log("toggleWatched");
  //   // setState((prevState) => ({
  //   //   movies: prevState.movies.map((movie) => {
  //   //     // console.log(id);
  //   //     if (movie.id === id) {
  //   //       return {
  //   //         ...movie,
  //   //         isWatched: !movie.isWatched,
  //   //       };
  //   //     }
  //   //     return movie;
  //   //   }),
  //   // }));
  // };

  return (
    <>
      <GalleryList movies={movies} onClick={openModal} />
      {isLoading && <h1>Loading...</h1>}
      <Button onClick={onClick}></Button>
      {image && <Modal img={image} closeModal={closeModal} />}
    </>
  );
}

export default App;

import React, { Component } from "react";
import "./App.css";
import movies from "./data/movies.json";
import { mapper } from "./utils/mapper";
import { Button } from "./components/Button/Button";
import { GalleryList } from "./components/Gallery/GalleryList/GalleryList";

class App extends Component {
  state = {
    movies: mapper(movies),
    isShown: false,
  };

  showFilms = () => {
    this.setState((prevState) => ({
      isShown: !prevState.isShown,
    }));
  };

  toggleWatched = (id) => {
    // console.log("toggleWatched");
    this.setState((prevState) => ({
      movies: prevState.movies.map((movie) => {
        // console.log(id);

        if (movie.id === id) {
          return {
            ...movie,
            isWatched: !movie.isWatched,
          };
        }
        return movie;
      }),
    }));
  };

  render() {
    const { isShown, movies } = this.state;
    return (
      <>
        <Button showFilms={this.showFilms} isShown={isShown} />
        {isShown && (
          <GalleryList movies={movies} toggleWatched={this.toggleWatched} />
        )}
      </>
    );
  }
}

export default App;

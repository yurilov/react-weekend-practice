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

  render() {
    const { isShown, movies } = this.state;
    return (
      <>
        <Button showFilms={this.showFilms} isShown={isShown} />
        {isShown && <GalleryList movies={movies} />}
      </>
    );
  }
}

export default App;

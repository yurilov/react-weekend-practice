import React, { Component } from "react";
import "./App.css";
import movies from "./data/movies.json";
import { mapper } from "./utils/mapper";

class App extends Component {
  state = {
    movies: mapper(movies),
  };

  render() {
    return <div>Test</div>;
  }
}

export default App;

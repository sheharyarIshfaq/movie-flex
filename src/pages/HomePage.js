import React from "react";
import AddMovie from "../components/AddMovie";
import MoviesList from "../components/MoviesList";

const HomePage = () => {
  return (
    <div>
      <AddMovie />
      <MoviesList />
    </div>
  );
};

export default HomePage;

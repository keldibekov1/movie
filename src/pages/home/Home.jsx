import { api } from "@/api";
import MovieView from "@/components/movie-view/MovieView";
import { useFetch } from "@/hooks/useFatch";
import React, { useEffect, useState } from "react";
import MovieSlider from "./MovieSlider";



const Home = () => {


  const { data, loading, error } = useFetch("/discover/movie");
  return (
    <>
      <div>
        <MovieSlider />
        <MovieView movies={data?.results} />
      </div>
    </>
  );
};

export default Home;

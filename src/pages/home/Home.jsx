import { api } from "@/api";
import MovieView from "@/components/movie-view/MovieView";
import { useFetch } from "@/hooks/useFatch";
import React, { useEffect, useState } from "react";
import MovieSlider from "./MovieSlider";
import { useNavigate } from "react-router-dom";



const Home = () => {


  const { data, loading, error } = useFetch("/discover/movie");
  const navigate = useNavigate(); 
  return (
    <>
      <div>       
        <MovieSlider />
        <div className="container mx-auto flex justify-between items-center">
        <p className="text-white text-lg font-semibold">На неделе</p>
        <p onClick={() => navigate("/movies")} className="text-red-500  font-medium cursor-pointer hover:underline">
          Показать все
        </p>

        
      </div>
        <MovieView movies={data?.results}  limit={4} />
      </div>
    </>
  );
};

export default Home;

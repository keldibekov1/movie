// import Genres from '@/components/genres/Genres'
import MovieView from "@/components/movie-view/MovieView";
import { useFetch } from "@/hooks/useFatch";
import React, { useEffect, useState } from "react";

const Movies = () => {
  const [genre, setGenre] = useState("");
  const { data, error, loading } = useFetch("/discover/movie", {
    page: 1,
    with_genres: genre,
    without_genres: "18,10749,36",
  });
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      {/* <Genres setGenre={setGenre}/> */}
      <MovieView movies={data?.results} />
    </div>
  );
};

export default Movies;

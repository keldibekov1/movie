import React from "react";
import Card from "./Card";

const MovieView = ({ movies = [] }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-4">
        <p className="text-white text-lg font-semibold">На неделе</p>
        <p className="text-red-500  font-medium cursor-pointer hover:underline">
          Показать все
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.slice(0, 4).map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MovieView;

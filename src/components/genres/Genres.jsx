import { useFetch } from "@/hooks/useFatch";
import React from "react";

const Genres = ({ handleChangeGenre, genres }) => {
  const { data } = useFetch("/genre/movie/list");

  const array = genres.split("-").slice(1);
  return (
    <div
      className="container mx-auto py-4"
      style={{ overflowX: "auto", whiteSpace: "nowrap", scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <style>{`
        /* Scrollbar ni yashirish */
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {data?.genres?.map((genre) => (
        <span
          onClick={() => handleChangeGenre(genre.id.toString())}
          key={genre.id}
          className={`inline-block cursor-pointer select-none px-4 py-2 rounded-2xl border transition mr-4
            ${
              array.includes(genre.id.toString())
                ? "bg-[#C61F1F] text-white border-[#C61F1F]"
                : "bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700 hover:text-white"
            }`}
          style={{ whiteSpace: "nowrap" }}
        >
          {genre.name}
        </span>
      ))}
    </div>
  );
};

export default Genres;

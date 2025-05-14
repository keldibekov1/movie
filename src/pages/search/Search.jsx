import React from "react";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="container mx-auto mt-12">
      <div className="max-w-xl mx-auto text-center">
        <div className="relative w-[380px] mx-auto">
          <IoSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#C61F1F] text-xl" />
          <input
            type="text"
            placeholder="Названия фильма"
            className="w-full h-16 pl-12 pr-4 py-3 rounded-lg bg-[#1D1D1D] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C61F1F]"
          />
        </div>

        <div className="mt-30 text-gray-400 space-y-2">
          <p className="text-[20px] font-semibold">Страница пока пустая</p>
          <p className="text-[20px] mt-20">
            По вашему запросу ничего не найдено
          </p>
        </div>
      </div>
    </div>
  );
};

export default Search;

import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#111111] text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-2xl mt-4">Страница не найдена</p>
        <p className="mt-4 text-xl">
          К сожалению, страница, которую вы ищете, не существует.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block bg-[#C61F1F] text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
        >
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

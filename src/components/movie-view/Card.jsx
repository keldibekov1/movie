import React, { useEffect, useState } from "react";
import { CiBookmark } from "react-icons/ci";
import toast from "react-hot-toast";

const Card = ({ item, updateBookmarks }) => {
  const url = import.meta.env.VITE_IMAGE_URL;
  const [isBookmarked, setIsBookmarked] = useState(false);

  const formatDate = (dateStr) => {
    const [year, month, day] = dateStr.split("-");
    return `${day}.${month}.${year}`;
  };

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    const exists = bookmarks.some((b) => b.id === item.id);
    setIsBookmarked(exists);
  }, [item.id]);

  const toggleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

    if (isBookmarked) {
      const updated = bookmarks.filter((b) => b.id !== item.id);
      localStorage.setItem("bookmarks", JSON.stringify(updated));
      setIsBookmarked(false);
      toast.error("Удалено из Избранного");
      updateBookmarks(updated); 
    } else {
      const updated = [...bookmarks, item];
      localStorage.setItem("bookmarks", JSON.stringify(updated));
      setIsBookmarked(true);
      toast.success("Добавлено в Избранное");
      updateBookmarks(updated); 
    }
  };

  return (
    <div className="p-3 rounded-xl shadow-md bg-[#1D1D1D] hover:shadow-xl transition-shadow duration-300 relative">
      <div className="overflow-hidden rounded-lg relative group">
        <img
          src={`${url}${item.poster_path}`}
          alt={item.title}
          className="w-full h-[280px] sm:h-[320px] md:h-[360px] object-cover hover:scale-105 transition-transform duration-300"
        />

        <div
          onClick={toggleBookmark}
          className="absolute top-2 right-2 bg-black/50 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
        >
          <CiBookmark
            className={`text-2xl ${isBookmarked ? "text-yellow-400" : "text-white"}`}
          />
        </div>
      </div>

      <div className="mt-3 space-y-1">
        <h2 className="text-base sm:text-lg font-semibold line-clamp-1">
          {item.title}
        </h2>
        <p className="text-sm text-gray-500">📅 {formatDate(item.release_date)}</p>
        <p className="text-sm text-yellow-500">⭐ {item.vote_average.toFixed(1)}</p>
      </div>
    </div>
  );
};

export default Card;

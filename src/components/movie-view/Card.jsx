import React, { useEffect, useState } from "react";
import { CiBookmark } from "react-icons/ci";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { IoIosStarOutline } from "react-icons/io";

const Card = ({ item, updateBookmarks }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/movie/${item.id}`);
  };
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
    <div
      onClick={handleClick}
      className="p-3 rounded-xl shadow-md bg-[#1D1D1D] hover:shadow-xl transition-shadow duration-300 relative"
    >
     <div className="overflow-hidden rounded-lg relative group" style={{ aspectRatio: "2 / 3", width: "100%" }}>
  <img
    src={`${url}${item.poster_path}`}
    alt={item.title}
    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
    loading="lazy"
    onError={(e) => {
      e.target.style.display = "none";
    }}
  />
  <div
    onClick={(e) => {
      e.stopPropagation();
      toggleBookmark();
    }}
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
        <p className="text-sm text-gray-500">{formatDate(item.release_date)}</p>
         <div className="flex items-center gap-1 text-sm text-yellow-500">
          <IoIosStarOutline className="text-yellow-300" />
          <p>{item.vote_average.toFixed(1)}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

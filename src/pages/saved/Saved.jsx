import React, { useEffect, useState } from "react";
import Card from "@/components/movie-view/Card";

const Saved = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarks(saved);
  }, []);

  const updateBookmarks = (updatedBookmarks) => {
    setBookmarks(updatedBookmarks);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {bookmarks.length === 0 ? (
        <p className="text-gray-400">Not found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {bookmarks.map((item) => (
            <Card key={item.id} item={item} updateBookmarks={updateBookmarks} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Saved;

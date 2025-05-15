import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopOrRestore = () => {
  const location = useLocation();

  useEffect(() => {
    if ('scrollPositions' in window.history.state) {
      const pos = window.history.state.scrollPositions;
      window.scrollTo(pos.x, pos.y);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const pos = { x: window.scrollX, y: window.scrollY };
      window.history.replaceState({ scrollPositions: pos }, document.title);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
};

export default ScrollToTopOrRestore;

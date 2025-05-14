import React, { useState } from "react";
import { Swiper as SwiperCore, SwiperSlide } from "swiper/react";
import {
  FreeMode,
  Navigation,
  Thumbs,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import { useFetch } from "@/hooks/useFatch";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";

export default function MovieSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { data, loading, error } = useFetch("/discover/movie");
  const imageBase = import.meta.env.VITE_IMAGE_URL;

  const movies = data?.results || [];

  return (
    <div className="mb-[120px]">
      <div className="container mx-auto flex flex-col items-center">
        <SwiperCore
          style={{ "--swiper-navigation-color": "#fff" }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          spaceBetween={10}
          slidesPerView={7} 
          navigation
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          effect="fade"
          speed={600}
          modules={[FreeMode, Navigation, Thumbs, Autoplay, EffectFade]}
          className="w-full h-[640px] rounded-xl"
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <img
                src={`${imageBase}${movie.backdrop_path || movie.poster_path}`}
                alt={movie.title}
                className="w-full h-full object-cover rounded-xl"
              />
            </SwiperSlide>
          ))}
        </SwiperCore>

    
      </div>
    </div>
  );
}

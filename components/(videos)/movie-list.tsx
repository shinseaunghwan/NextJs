"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { getVideos } from "./getVideos";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

export default function MovieList({ id }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const videos = await getVideos(id);
      setVideos(videos);
    }
    fetchData();
  }, [id]);

  return (
    <Swiper
      modules={[Scrollbar, A11y, Autoplay]}
      speed={1000}
      spaceBetween={50}
      slidesPerView={4}
      autoplay={{ delay: 5000 }}
      scrollbar={{ draggable: true }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        1240: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
    >
      {videos.length > 0 ? (
        videos.slice(0, 6).map(
          (video) => (
            <SwiperSlide key={video.id}>
              <iframe
                src={`https://youtube.com/embed/${video.key}`}
                title={video.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </SwiperSlide>
          )
        )
      ) : (
        <p>Loading...</p>
      )}
    </Swiper>
  );
}

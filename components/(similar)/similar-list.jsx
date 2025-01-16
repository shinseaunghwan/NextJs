"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { getSimilar } from "./getSimilar";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

export default function SimilarList({ id }) {
  const [lists, setList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const lists = await getSimilar(id);
      setList(lists);
    }
    fetchData();
  }, [id]);

  return (
    <Swiper
      modules={[Scrollbar, A11y, Autoplay]}
      speed={1000}
      spaceBetween={50}
      slidesPerView={4}
      autoplay={{ delay: 8000 }}
      scrollbar={{ draggable: true }}
      breakpoints={{
        0: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
        1240: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
    >
      {lists.length > 0 ? (
        lists.slice(0, 6).map(
          (list) => (
            <SwiperSlide key={list.id}>
              <div>
                <img src={list.poster_path} alt={list.id} />
                <span>{list.title}</span>
              </div>
            </SwiperSlide>
          )
        )
      ) : (
        <p>Loading...</p>
      )}
    </Swiper>
  );
}

"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { getCredits } from "../(credits)/getCredits";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

export default function CreditsList({ id }) {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const credits = await getCredits(id);
      setCredits(credits);
    }
    fetchData();
  }, [id]);

  return (
    <Swiper
      modules={[A11y, Autoplay]}
      speed={1000}
      spaceBetween={50}
      slidesPerView={4}
      autoplay={{ delay: 5000 }}
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
      {credits.length > 0 ? (
        credits.slice(0, 10).map(
          (credit) => (
            <SwiperSlide key={credit.id}>
              <div>
                <img src={credit.profile_path} alt={credit.name} />
                <span>{credit.character}</span>
                <p>{`( ${credit.name} )`}</p>
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

import React from "react";
import "./testi.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Tina",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing eliteperferendis asperiores facere magnam voluptate dignissimos necessitatibus totam voluptatem provident eos cumque nisi labore illo, recusandae fuga",
  },
  {
    avatar: AVTR2,
    name: "Ardi",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing eliteperferendis asperiores facere magnam voluptate dignissimos necessitatibus totam voluptatem provident eos cumque nisi labore illo, recusandae fuga",
  },
  {
    avatar: AVTR3,
    name: "Ansyah",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing eliteperferendis asperiores facere magnam voluptate dignissimos necessitatibus totam voluptatem provident eos cumque nisi labore illo, recusandae fuga",
  },
  {
    avatar: AVTR4,
    name: "Liony",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing eliteperferendis asperiores facere magnam voluptate dignissimos necessitatibus totam voluptatem provident eos cumque nisi labore illo, recusandae fuga",
  },
];

const Testi = () => {
  return (
    <section id="testi">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testi__container" // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testi">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar1" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testi;

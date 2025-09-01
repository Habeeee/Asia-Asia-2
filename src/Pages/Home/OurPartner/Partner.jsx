import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { partnerImgs } from "../../../data/datas";

import "swiper/css";
import "swiper/css/autoplay";

import "./partner.scss";
import "./mediaPartner.scss";
const Partner = () => {
  return (
    <section className="partners container">
      <h2>OUR PARTNERS</h2>
      <div className="partnersSlideContent">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false }}
          speed={4000}
          centeredSlides={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }
          }}
        >
          <div className="partnerImages">
            {partnerImgs.map((partner, index) => (
              <SwiperSlide key={index}>
                <img src={partner} alt="Partners" />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Partner;

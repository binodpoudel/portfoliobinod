import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/p2.png";
import Ecommerce from "../../img/E-commerce.png";
import Online from "../../img/online12.png";
import Pizza from "../../img/pizza.png";
import Eco2 from "../../img/online2.png";
import Travel from "../../img/travel.png";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Old Projects</span>
      <span>Examples</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Eco2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Online} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Pizza} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Travel} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/carousel.css"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

import CocktailFive from "../images/CocktailFive.JPG"
import Carpaccio from "../images/Carpaccio.jpeg"
import EspressoMartini from "../images/EspressoMartini.JPG"
import Mojito from "../images/Mojito.jpeg"
import CocktailOne from "../images/CocktailOne.jpg"
import CocktailsTable from "../images/CocktailsTable.jpeg"
import PeaButterflyDrink from "../images/PeaButterFlyDrink.jpeg"
import Tartare from "../images/Tartare.jpeg"
import DinnerView from "../images/DinnerView.jpg"
import BarPic from "../images/BarPic.JPG"


function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={CocktailFive} alt="Cocktail Five"/></SwiperSlide>
        <SwiperSlide><img src={Carpaccio} alt="Cocktail Five"/></SwiperSlide>
        <SwiperSlide><img src={Mojito} alt="Cocktail Five"/></SwiperSlide>
        <SwiperSlide><img src={EspressoMartini}/></SwiperSlide>
        <SwiperSlide><img src={CocktailOne}/></SwiperSlide>
        <SwiperSlide><img src={DinnerView}/></SwiperSlide>
        <SwiperSlide><img src={CocktailsTable}/></SwiperSlide>
        <SwiperSlide><img src={PeaButterflyDrink}/></SwiperSlide>
        <SwiperSlide><img src={Tartare}/></SwiperSlide>
        <SwiperSlide><img src={BarPic}/></SwiperSlide>
        {/* <SwiperSlide><img src={}/></SwiperSlide>
        <SwiperSlide><img src={}/></SwiperSlide>
        <SwiperSlide><img src={}/></SwiperSlide>
        <SwiperSlide><img src={}/></SwiperSlide>
        */}
      </Swiper>
    </>
  )
}

export default Carousel
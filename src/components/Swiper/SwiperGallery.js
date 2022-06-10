import React from "react";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

import 'swiper/swiper-bundle.css';

import classes from "./SwiperGallery.module.css";

import skrin1 from "../../galleryS/skrin1.svg";
import skrin2 from "../../galleryS/skrin2.svg";
import skrin3 from "../../galleryS/skrin3.svg";
import skrin4 from "../../galleryS/skrin4.svg";
import skrin5 from "../../galleryS/skrin5.svg";
import skrin6 from "../../galleryS/skrin6.svg";
import skrin7 from "../../galleryS/skrin7.svg";
import skrin8 from "../../galleryS/skrin8.svg";
import skrin9 from "../../galleryS/skrin9.svg";
import skrin10 from "../../galleryS/skrin10.svg";
import skrin11 from "../../galleryS/skrin11.svg";
import skrin12 from "../../galleryS/skrin12.svg";
import skrin13 from "../../galleryS/skrin13.svg";
import skrin14 from "../../galleryS/skrin14.svg";
import skrin15 from "../../galleryS/skrin15.svg";

const skrins = [skrin1, skrin2, skrin3, skrin4, skrin5, skrin6, skrin7, skrin8, skrin9, skrin10, skrin11, skrin12, skrin13, skrin14, skrin15];

const gallery = skrins.map(skrin => <SwiperSlide><img src={skrin} className={classes.image} key={skrin}/></SwiperSlide>);

const SwiperGallery = () => {
  return(
    <div className={classes.swiperSection}>
      <h1>Get to know new AxiomOS!</h1>
      <main>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          onSwiper={(swiper) => (window.swiper = swiper)}
          slidesPerView={5}
          spaceBetween={50}
          navigation
          loop
          scrollbar={{ draggable: true }}
          pagination={{ clickable: true }}
        >
          {gallery}
          {/* <SwiperSlide><img src={skrin1}/></SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide> */}
        </Swiper>
      </main>
    </div>
  )
};

export default SwiperGallery;
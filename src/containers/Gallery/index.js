import React, { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.scss';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import styled from 'styled-components';
import Image1 from '~~static/images/web01-1.jpg';
import data from './data.json';

const Container = styled.div`
  width: 1200px;
  max-width: 100%;
  padding: 0 12px;
  margin: 0 auto;
`;

const GalleryItemComponent = styled.div`
  display: block;
  width: 100%;
  padding: 6px;
  img {
    width: 100%;
  }
`;

function GalleryItem() {
  return (
    <GalleryItemComponent>
      <img src={Image1} alt="" />
    </GalleryItemComponent>
  );
}

const BREAK_POINTS =   { 350: 1, 750: 2, 900: 3 };

function Gallery() {
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    setGalleryData(data);
  }, []);

  return (
    <Container>
      <ResponsiveMasonry
        columnsCountBreakPoints={BREAK_POINTS}
      >
        <Masonry>
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
        </Masonry>
      </ResponsiveMasonry>
    </Container>
  );
  // return (
  //   <Swiper
  //     spaceBetween={50}
  //     slidesPerView={3}
  //     onSlideChange={() => console.log('slide change')}
  //     onSwiper={(swiper) => console.log(swiper)}
  //   >
  //     <SwiperSlide>Slide 1</SwiperSlide>
  //     <SwiperSlide>Slide 2</SwiperSlide>
  //     <SwiperSlide>Slide 3</SwiperSlide>
  //     <SwiperSlide>Slide 4</SwiperSlide>
  //   </Swiper>
  // );
}

export default Gallery;

import React, { useEffect, useState, useContext } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useSpring, useTrail, animated } from 'react-spring';
// import { Trail } from 'react-spring/renderprops';
import ImagesLoaded from 'react-images-loaded';
import { v4 as uuid } from 'uuid';
import { Context } from '~~src/Store';

import data from './data.json';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.scss';

const Container = styled.div`
  width: 1200px;
  max-width: 100%;
  padding: 0 12px;
  margin: 0 auto;
`;

const GalleryItemComponent = styled(animated.div).attrs(props => ({
  ...props.style
}))`
  display: block;
  width: 100%;
  padding: 6px;

  .gallery-item {
    cursor: pointer;
    overflow: hidden;
    position: relative;
    &:hover {
      img {
        opacity: 0.6;
        transform: scale(1.08)
      }
      .title {
        opacity: 1;
        visibility: visible;
      }
    }
    img {
      position: relative;
      width: 100%;
      transition: 0.3s ease all;
      z-index: 1;
    }

    .title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
      color: white;
      font-size: 1.6em;
      white-space: nowrap;
      opacity: 0;
      visibility: hidden;
      transition: 0.3s ease all;
    }
  }
`;

function GalleryItem(props) {
  const { obj = {} } = props;
  const { bg, title = '' } = obj;

  const aniStyle = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });
  return (
    <GalleryItemComponent style={aniStyle}>
      <div className="gallery-item">
        <img className="pic" src={bg} alt="" />
        <p className="title">{title}</p>
      </div>
    </GalleryItemComponent>
  );
}

const BREAK_POINTS = { 350: 1, 750: 2, 900: 3 };

function Gallery(props) {
  const [state, dispatch] = useContext(Context);
  const [galleryData, setGalleryData] = useState([]);

  const [trail, set, stop] = useTrail(galleryData.length, () => ({ opacity: 1 }));

  set({ opacity: 0 });

  useEffect(() => {
    const newData = data.map(o => ({ id: uuid(), ...o }));
    setGalleryData(newData);
  }, []);

  return (
    <ImagesLoaded
      done={() => { console.log('done'); }}
    >
      <Container>
        <ResponsiveMasonry
          columnsCountBreakPoints={BREAK_POINTS}
        >
          <Masonry>
            {trail.map((style, index, ...rest) => {
              const obj = galleryData?.[index];
              return (
                <GalleryItem
                  key={obj.id}
                  style={style}
                  obj={obj}
                />
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      </Container>
    </ImagesLoaded>
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

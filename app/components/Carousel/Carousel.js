'use client';
//! Fix carousel, its above z-index of header
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import tw from 'tailwind-styled-components';

//! ---> STYLES <---
const ContainerSection = tw.section`
  w-full overflow-hidden
  bg-main-color
  pb-20
`;

//! ---> DATA <---
const carouselItems = [
  { src: '/images/beef-shawarma-plate.avif', alt: 'Beef Shawarma Plate' },
  { src: '/images/beef-shawarma-wrap.avif', alt: 'Beef Shawarma Wrap' },
  { src: '/images/chicken-shawarma-wrap.avif', alt: 'Chicken Shawarma Wrap' },
  { src: '/images/chicken-shawarma-plate.avif', alt: 'Chicken Shawarma Plate' },
  { src: '/images/falafel-plate.avif', alt: 'Falafel Plate' },
  { src: '/images/gyro-plate.avif', alt: 'Gyro Plate' },
  { src: '/images/gyro-wrap.avif', alt: 'Gyro Wrap' },
  { src: '/images/mix-grill-combo-plate.avif', alt: 'Mix Grill Combo Plate' },
];

//! ---> COMPONENT <---
export default function Carousel() {
  return (
    <ContainerSection>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView="auto"
        centeredSlides={false}
        speed={4000} // Slower, smooth scrolling
        autoplay={{
          delay: 0, // Continuous scrolling
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        allowTouchMove={false}
        loop={true}
        className="flex items-center w-full z-[-1]"
      >
        {carouselItems.map((item, index) => (
          <SwiperSlide key={index} style={{ width: '275px', height: '375px' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </ContainerSection>
  );
}

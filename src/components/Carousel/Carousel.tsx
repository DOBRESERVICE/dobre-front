import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.scss';
import { DefaultNextArrow } from '@/components/Carousel/ul/DefaultNextArrow/DefaultNextArrow';
import { DefaultPrevArrow } from '@/components/Carousel/ul/DefaultPrevArrow/DefaultPrevArrow';
import { nextArrow, previous } from '@/assets/image';
import { useRef } from 'react';
import { SwiperButtons } from '@/components/Slider/common/SwiperButtons/SwiperButtons';
export const Carousel = ({ children }: { children: React.ReactNode }) => {
  const sliderRef = useRef<Slider>(null);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    adaptiveHeight: true,
    swipe: false,
    prevArrow: <DefaultPrevArrow />,
    nextArrow: <DefaultNextArrow />,
  };
  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
      console.log(sliderRef.current);
    }
  };

  const onPrevious = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  return (
    <>
      <Slider ref={sliderRef} {...settings} className={styles.carousel}>
        {children}
      </Slider>
      {/*<SwiperButtons rightIcon={nextArrow} leftIcon={previous} onNext={next} />*/}
    </>
  );
};

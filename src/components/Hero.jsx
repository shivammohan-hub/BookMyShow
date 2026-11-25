import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Hero = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      navigation
      loop={true}
      className="w-[80%] h-[300px] my-5"
    >
      <SwiperSlide>
        <img src="slider1.png" className="w-full rounded-lg h-full object-center" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="slider2.png" className="w-full rounded-lg h-full object-center" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="slider3.png" className="w-full rounded-lg h-full object-center" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
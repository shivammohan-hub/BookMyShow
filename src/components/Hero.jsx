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
      className="w-[80%] h-[500px] my-7 rounded-lg"
    >
      <SwiperSlide>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo3wkd0lG4-VZpn7FjGAZ-gVWHE2yU4DrggQ4iYQYmAQ&s" className="w-full h-full object-cover" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="https://images6.alphacoders.com/141/1412554.jpg" className="w-full h-full object-cover" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTkb8BdONBoQn0X8SnQ7gg5pzs89KR7rIGtVLPD9y4mLnzt1jfH0E2f1je&s=10" className="w-full h-full object-cover" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcqDODrkxmrDU-D_ziQ2M4id9HYcgZUt-tOfLWUDf0QIdW9ZgnJr15wUw&s=10" className="w-full h-full object-cover" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
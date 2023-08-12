// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import Image from "next/image";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

function SwiperCompo() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={false}
        autoplay={{
          // @ts-ignore
          Autoplay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            className="aspect-video rounded-lg h-auto md:h-[25rem]"
            src="https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
            alt="slider"
            width={1260}
            height={750}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="aspect-video rounded-lg h-[25rem]"
            src="https://images.pexels.com/photos/2161920/pexels-photo-2161920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="slider"
            width={1260}
            height={750}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="aspect-video rounded-lg h-[25rem]"
            src="https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="slider"
            width={1260}
            height={750}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="aspect-video rounded-lg h-[25rem]"
            src="https://images.pexels.com/photos/6023997/pexels-photo-6023997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="slider"
            width={1260}
            height={750}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="aspect-video rounded-lg h-[25rem]"
            src="https://images.pexels.com/photos/235990/pexels-photo-235990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="slider"
            width={1260}
            height={750}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="aspect-video rounded-lg h-[25rem]"
            src="https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="slider"
            width={1260}
            height={750}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="aspect-video rounded-lg h-[25rem]"
            src="https://images.pexels.com/photos/1650830/pexels-photo-1650830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="slider"
            width={1260}
            height={750}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="aspect-video rounded-lg h-[25rem]"
            src="https://images.pexels.com/photos/2440021/pexels-photo-2440021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="slider"
            width={1260}
            height={750}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="aspect-video rounded-lg h-[25rem]"
            src="https://images.pexels.com/photos/2440023/pexels-photo-2440023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="slider"
            width={1260}
            height={750}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="aspect-video rounded-lg h-[25rem]"
            src="https://images.pexels.com/photos/12828109/pexels-photo-12828109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="slider"
            width={1260}
            height={750}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperCompo;

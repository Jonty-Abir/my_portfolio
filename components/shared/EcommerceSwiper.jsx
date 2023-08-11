// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import unique from "uniqid";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import Image from "next/image";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

function EcommerceSwiper() {
  const urls = [
    { url: "/assets/ecommerce/flightOffers.webp" },
    { url: "/assets/ecommerce/bigOffer.webp" },
    { url: "/assets/ecommerce/infinix.webp" },
    { url: "/assets/ecommerce/amazon_p1.jpg" },
    { url: "/assets/ecommerce/amazon_p2.jpg" },
    { url: "/assets/ecommerce/amazon_p3.jpg" },
    { url: "/assets/ecommerce/amazon_p4.jpg" },
  ];
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={false}
        autoplay={{
          Autoplay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {urls.map((value) => (
          <SwiperSlide key={unique()}>
            <Image
              className="aspect-video bg-cover rounded-lg h-32 md:w-w48 lg:h-60"
              src={`${value.url}`}
              alt="slider"
              width={1260}
              height={450}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export { EcommerceSwiper };

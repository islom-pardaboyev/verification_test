import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function SwiperLogin() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2000, 
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="w-full mt-5"
      >
        {Array(3)
          .fill(0)
          .map((_, inx) => (
            <SwiperSlide key={inx}>
              <div className="p-5 space-y-3 max-w-[403px] mx-auto">
                <h1 className="text-grayscale-10 font-bold text-3xl leading-[40px] tracking-[.5%]">
                  The biggest international and local film streaming
                </h1>
                <p className="text-grayscale-30 tracking-[.5%]">
                  Semper in cursus magna et eu varius nunc adipiscing. Elementum
                  justo, laoreet id sem semper parturient
                </p>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
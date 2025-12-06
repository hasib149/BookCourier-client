import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";

const Review = ({ reviewData }) => {
  const reviewDatas = use(reviewData);
  return (
    <div className="mb-16">
      <div className="text-center max-w-2xl mx-auto space-y-2 mt-16 mb-16">
        <h2 className="text-3xl font-bold text-secondary">
          What our customers are saying
        </h2>
        <p className="text-gray-600">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={Math.min(3, reviewDatas.length)}
        // loop={reviewDatas.length > 3}
        coverflowEffect={{
          rotate: 50,
          stretch: "1%",
          depth: 200,
          modifier: 1,
          scale: 0.75,
          slideShadows: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {reviewDatas?.map((reviewdata) => (
          <SwiperSlide key={reviewdata.id}>
            <ReviewCard reviewdata={reviewdata}></ReviewCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;

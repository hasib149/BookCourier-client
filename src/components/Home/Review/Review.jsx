import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Review = () => {
  const reviewDatas = [
    { bookname: "The Alchemist", author: "Paulo Coelho", rating: 4.7 },
    { bookname: "1984", author: "George Orwell", rating: 4.6 },
    { bookname: "To Kill a Mockingbird", author: "Harper Lee", rating: 4.8 },
    {
      bookname: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      rating: 4.5,
    },
    { bookname: "Pride and Prejudice", author: "Jane Austen", rating: 4.6 },
    {
      bookname: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      rating: 4.9,
    },
    {
      bookname: "The Catcher in the Rye",
      author: "J.D. Salinger",
      rating: 4.3,
    },
    { bookname: "The Hobbit", author: "J.R.R. Tolkien", rating: 4.8 },
    { bookname: "Moby Dick", author: "Herman Melville", rating: 4.1 },
    { bookname: "War and Peace", author: "Leo Tolstoy", rating: 4.4 },
  ];

  return (
    <div className="mb-16">
      <div className="text-center  p-8 rounded-lg max-w-3xl mx-auto mt-16 mb-16">
        <h2 className="text-4xl font-bold text-blue-700 mb-3">
          What our customers are <span className="text-sky-600">saying</span>
        </h2>
        <p className="text-lg text-gray-600">
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
        loop={reviewDatas.length > 3}
        coverflowEffect={{
          rotate: 50,
          stretch: 1,
          depth: 200,
          modifier: 1,
          scale: 0.75,
          slideShadows: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {reviewDatas.map((reviewdata, index) => (
          <SwiperSlide key={index}>
            <ReviewCard reviewdata={reviewdata} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;

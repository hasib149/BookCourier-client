import CoverageSection from "../../components/Home/CoverageSection/CoverageSection";
import Plants from "../../components/Home/Plants";
import Review from "../../components/Home/Review/Review";
import Banner from "../../components/Home/Slider/Banner";
import Testimonials from "../../components/Home/Testimonials/Testimonials";
import WhyChooseBookCourier from "../../components/Home/Why-Choose-Book-Courier/WhyChooseBookCourier";

const Home = () => {
  return (
    <div className="-mt-2">
      {/* banner */}
      <Banner></Banner>
      {/* Latest Books Section by database */}
      <Plants />
      {/* Coverage Section */}
      <CoverageSection></CoverageSection>
      {/* Why Choose Book Courier */}
      <WhyChooseBookCourier></WhyChooseBookCourier>
      {/* Review  */}
      <Review></Review>
      {/* Testimonials */}
      <Testimonials></Testimonials>
      {/* More components */}
    </div>
  );
};

export default Home;

import CoverageSection from "../../components/Home/CoverageSection/CoverageSection";
import FeaturedBooks from "../../components/Home/FeaturedBooks/FeaturedBooks";
import Review from "../../components/Home/Review/Review";
import Banner from "../../components/Home/Slider/Banner";
import Testimonials from "../../components/Home/Testimonials/Testimonials";
import WhyChooseBookCourier from "../../components/Home/Why-Choose-Book-Courier/WhyChooseBookCourier";
import LatestBooks from "../../components/Home/LatestBooks/LatestBooks";

const Home = () => {
  return (
    <div className="-mt-6">
      {/* banner */}
      <Banner></Banner>
      {/* Latest Books Section by database */}
      <LatestBooks></LatestBooks>
      {/* Coverage Section */}
      <CoverageSection></CoverageSection>
      {/* Why Choose Book Courier */}
      <WhyChooseBookCourier></WhyChooseBookCourier>
      {/* Review  */}
      <Review></Review>
      {/* Testimonials */}
      <Testimonials></Testimonials>
      {/* Featured Books */}
      <FeaturedBooks></FeaturedBooks>
      {/* More components */}
    </div>
  );
};

export default Home;

import CoverageSection from "../../components/Home/CoverageSection/CoverageSection";
import FeaturedBooks from "../../components/Home/FeaturedBooks/FeaturedBooks";
import Review from "../../components/Home/Review/Review";
import Banner from "../../components/Home/Slider/Banner";
import Testimonials from "../../components/Home/Testimonials/Testimonials";
import WhyChooseBookCourier from "../../components/Home/Why-Choose-Book-Courier/WhyChooseBookCourier";
import LatestBooks from "../../components/Home/LatestBooks/LatestBooks";
import Features from "../../components/Home/Features/Features";
import Services from "../../components/Home/Services/Services";
import Categories from "../../components/Home/Categories/Categories";
import Statistics from "../../components/Home/Statistics/Statistics";

const Home = () => {
  return (
    <div className="-mt-24">
      {/* banner */}
      <Banner></Banner>
      {/* Latest Books Section by database */}
      <LatestBooks></LatestBooks>
      {/* features */}
      <Features></Features>
      {/* service */}
      <Services></Services>
      {/* Coverage Section */}
      <CoverageSection></CoverageSection>
      {/* cetegorirs */}
      <Categories></Categories>
      {/* Why Choose Book Courier */}
      <WhyChooseBookCourier></WhyChooseBookCourier>
      {/* Review  */}
      <Review></Review>
      {/* Statistics  */}
      <Statistics></Statistics>
      {/* Testimonials */}
      <Testimonials></Testimonials>
      {/* Featured Books */}
      <FeaturedBooks></FeaturedBooks>
      {/* More components */}
    </div>
  );
};

export default Home;

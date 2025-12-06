import CoverageSection from "../../components/Home/CoverageSection/CoverageSection";
import Plants from "../../components/Home/Plants";
import Banner from "../../components/Home/Slider/Banner";
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

      {/* More components */}
    </div>
  );
};

export default Home;

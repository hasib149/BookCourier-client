import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Slider1 from "./Slider1";
import Slider2 from "./Slider2";
import Slider3 from "./Slider3";

const Banner = () => {
  return (
    <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} interval={1700}>
      <div>
        <Slider1></Slider1>
      </div>
      <div>
        <Slider2></Slider2>
      </div>
      <div>
        <Slider3></Slider3>
      </div>
    </Carousel>
  );
};

export default Banner;

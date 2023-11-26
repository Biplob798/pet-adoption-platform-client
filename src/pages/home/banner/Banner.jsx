import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import slider4 from "../../../assets/banner3.jpg";

import slider5 from "../../../assets/banner4.webp";
import slider6 from "../../../assets/banner5.webp";



const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src={slider4} />
      </div>
      <div>
        <img src={slider5} />
      </div>
      <div>
        <img src={slider6} />
      </div>
    </Carousel>
  );
};

export default Banner;
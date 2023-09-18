import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { homeCarouselData } from "./HomeCarouselData";

const HomeCarousel = () => {
  const items = homeCarouselData.map((item) => (
    <img
      className="cursor-pointer"
      src={item.image}
      role="presentation"
      alt=""
    />
  ));

  return <AliceCarousel items={items} 
  disableButtonsControls
  autoPlay
  autoPlayInterval={1000}
  infinite />;
};

export default HomeCarousel;

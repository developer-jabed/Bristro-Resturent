import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";
import img3 from "../../../assets/home/03.png";
import img4 from "../../../assets/home/04.jpg";
import img5 from "../../../assets/home/05.png";
import img6 from "../../../assets/home/06.png";

const Banner = () => {
  const onChange = (index) => {
    console.log("Slide changed to:", index);
  };

  const onClickItem = (index) => {
    console.log("Item clicked:", index);
  };

  const onClickThumb = (index) => {
    console.log("Thumbnail clicked:", index);
  };

  return (
    <Carousel
      showArrows={true}
      onChange={onChange}
      onClickItem={onClickItem}
      onClickThumb={onClickThumb}
      infiniteLoop
      autoPlay
      interval={4000}
    >
      {[img1, img2, img3, img4, img5, img6].map((img, index) => (
        <div key={index}>
          <img
            src={img}
            alt={`Slide ${index + 1}`}
            className="max-h-[500px] w-full object-cover rounded-lg mx-auto"
          />
         
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;

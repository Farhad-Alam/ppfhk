import { FaCommentDots } from "react-icons/fa";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarouselData } from "../Data/data";

const Carousel = () => {
  return (
    <div className="relative">
      <div className="relative -z-10">
        <img
          src="images/unnamed (2).jpg"
          className="w-screen h-[20rem] object-cover"
          alt=""
        />
        <div className="absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] w-full h-full"></div>
      </div>

      <div className="max-w-4xl mx-auto absolute top-[25%] text-white left-[50%] transform translate-x-[-50%]">
        <ReactCarousel
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          interval={3000}
          showArrows={false}
          showIndicators={false}
          autoPlay
        >
          {/* Carousel */}
          {CarouselData.map((elem, i) => {
            return (
              <div key={i} className="text-center space-y-4">
                <FaCommentDots
                  size={30}
                  className="text-red-500 mx-auto mb-4"
                />
                <h1 className="text-2xl font-joseFin ">{elem.title}</h1>
                <p className="font-joseFin text-xs md:text-base text-gray-200">
                  {elem.desc}
                </p>
                <p className="text-red-400 font-semibold font-joseFin text-xs">
                  {elem.admin}
                </p>
              </div>
            );
          })}
        </ReactCarousel>
      </div>
    </div>
  );
};

export default Carousel;

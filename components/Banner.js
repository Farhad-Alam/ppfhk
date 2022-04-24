import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { detailsState } from "../atoms/detailsAtom";

function Banner({ name, img, id }) {
  const [show, setShow] = useRecoilState(modalState);
  const [detail, setdetail] = useRecoilState(detailsState);

  const addDetails = (id) => {
    
    setdetail(id);
  };


  return (
    <div className="w-[19rem] border-2 shadow-shadowDeep md:w-[20rem] xl:w-[22rem] mx-auto relative shadow-xl rounded-xl cursor-pointer hover:opacity-80 transition duration-300">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img className="banner_img" loading="lazy" src={img[0]} alt="" />
        </div>
        <div>
          <img className="banner_img" loading="lazy" src={img[1]} alt="" />
        </div>
        <div>
          <img className="banner_img" loading="lazy" src={img[2]} alt="" />
        </div>
      </Carousel>

      {/* Body Part */}
      <div className="p-5 flex justify-between items-center">
        <h1 className="font-semibold text-gray-500">{name}</h1>

        <button
          onClick={() => {
            setShow(true);
            addDetails(id);
          }}
          className="projectBtn"
        >
          Show More
        </button>
      </div>
      {/* Modal */}
    </div>
  );
}

export default Banner;

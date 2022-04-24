import { BsFillSuitHeartFill } from "react-icons/bs";
import { FaCube } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { GiTrophy } from "react-icons/gi";
import CountUp from "react-countup";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Clients = () => {
  const [ref, inView] = useInView();

  useEffect(() => {
    console.log(inView);
  }, [inView]);

  return (
    <div className="mt-20">
      <div className="relative -z-10">
        <img
          src="images/unnamed7.jpg"
          className="w-screen h-[18em] object-cover"
          alt=""
        />
        <div className="absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] w-full h-full"></div>
      </div>
      {/* Body */}
      <div className="max-w-6xl mx-auto grid font-joseFin mt-[-16rem] md:mt-[-12rem] text-white grid-cols-2 md:grid-cols-4 place-items-center space-y-2 ">
        <div className="space-y-2 text-center" ref={ref}>
          <BsFillSuitHeartFill
            className="text-red-600 mb-3 mx-auto"
            size={28}
          />
          <span className="text-2xl md:text-3xl font-semibold tracking-wider">
            <CountUp
              start={inView && 0}
              end={69}
              duration={2}
              className="text-3xl"
            />
          </span>
          <p className="text-sm md:text-base">HAPPY CLIENTS</p>
        </div>
        <div className="space-y-2 text-center" ref={ref}>
          <FaCube className="text-red-600 mb-3 mx-auto" size={28} />
          <span className="text-2xl md:text-3xl font-semibold tracking-wider">
            <CountUp
              start={inView && 0}
              end={69}
              duration={2}
              className="text-3xl"
            />
          </span>
          <p className="text-sm md:text-base">HAPPY CLIENTS</p>
        </div>
        <div className="space-y-2 text-center" ref={ref}>
          <FaPencilAlt className="text-red-600 mb-3 mx-auto" size={28} />
          <span className="text-2xl md:text-3xl font-semibold tracking-wider">
            <CountUp
              start={inView && 0}
              end={69}
              duration={2}
              className="text-3xl"
            />
          </span>
          <p className="text-sm md:text-base">HAPPY CLIENTS</p>
        </div>
        <div className="space-y-2 text-center" ref={ref}>
          <GiTrophy className="text-red-600 mb-3 mx-auto" size={28} />
          <span className="text-2xl md:text-3xl font-semibold tracking-wider">
            <CountUp
              start={inView && 0}
              end={69}
              duration={2}
              className="text-3xl"
            />
          </span>
          <p className="text-sm md:text-base">HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default Clients;

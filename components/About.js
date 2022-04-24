import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView();

  return (
    <div className="section mt-10" id="about">
      {/* Top */}

      <div className="grid lg:grid-cols-2 lg:-space-x-5">
        {/* Image */}
        <div className="">
          <img
            src="/images/unnamed2.jpg"
            className="mx-auto border-4 cursor-pointer hover:opacity-90 scale-95 hover:scale-100 duration-1000 p-4 lg:mx-0 w-[30rem] h-[30rem] lg:w-[28rem] lg:h-[28rem] object-cover"
            alt=""
          />
        </div>
        {/* Body */}
        <div className="mt-16 lg:mt-0 max-w-3xl mx-auto">
          <h1 className="text-3xl font-joseFin mb-8">More Info About Me</h1>
          <hr className="w-20 border-red-400 mb-8" />
          <p className="text-gray-500 text-sm md:text-base font-sans leading-7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, ullamco laboris nisi
            ut aliquip ex ea commodo..
          </p>
          <div className="text-xs md:text-sm grid grid-cols-2 sm:grid-cols-2 font-joseFin text-gray-800 gap-4 font-semibold mt-[2.6rem]">
            <p>Farhad Hossain</p>
            <p>3 May 2003</p>
            <p>Bangladesh</p>
            <p>irfanmini11@gmail.com</p>
            <p>+123456789</p>
            <p>Freelancer</p>
          </div>
          <div className="space-x-4 text-sm text-gray-900 font-joseFin mt-8">
            <button className="px-6 scale-anim py-[.6rem] border-teal-200 border-2 hover:bg-gradient-to-tr from-sky-200 to-sky-500 rounded-full">
              View Work
            </button>
            <button className="px-6 scale-anim py-[.6rem] border-2 hover:bg-none border-orange-400 bg-gradient-to-tr from-orange-200 to-orange-500 rounded-full">
              Hire Me
            </button>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div
        className="mt-20 grid  sm:grid-cols-2 gap-8 font-joseFin lg:max-w-6xl  max-w-3xl mx-auto "
        ref={ref}
      >
        <div className="cursor-pointer">
          <p>Web Design</p>
          <div className="w-full h-[6px] rounded-xl relative mt-3 bg-gray-200">
            <span
              className={
                inView
                  ? "absolute top-0 w-[85%] duration-1000 rounded-xl left-0 h-full bg-red-400"
                  : "w-0"
              }
            ></span>
            <span
              className={
                inView
                  ? "font-sans text-[10px] absolute -top-5 right-[12%] duration-1000 bg-gray-300 flex rounded-full justify-center text-black font-bold w-6 h-6 items-center"
                  : " right-[95%]"
              }
            >
              85%
            </span>
          </div>
        </div>
        <div className="cursor-pointer">
          <p>Ui/Ux Design</p>
          <div className="w-full h-[6px] rounded-xl relative mt-3 bg-gray-200">
            <span
              className={
                inView
                  ? "absolute top-0 w-[85%] duration-1000 rounded-xl left-0 h-full bg-red-400"
                  : "w-0"
              }
            ></span>
            <span
              className={
                inView
                  ? "font-sans text-[10px] absolute -top-5 right-[12%] duration-1000 bg-gray-300 flex rounded-full justify-center text-black font-bold w-6 h-6 items-center"
                  : " right-[95%]"
              }
            >
              85%
            </span>
          </div>
        </div>
        <div className="cursor-pointer">
          <p>Education</p>
          <div className="w-full h-[6px] rounded-xl relative mt-3 bg-gray-200">
            <span
              className={
                inView
                  ? "absolute top-0 w-[80%] duration-1000 rounded-xl left-0 h-full bg-red-400"
                  : "w-0"
              }
            ></span>
            <span
              className={
                inView
                  ? "font-sans text-[10px] absolute -top-5 right-[17%] duration-1000 bg-gray-300 flex rounded-full justify-center text-black font-bold w-6 h-6 items-center"
                  : " right-[95%]"
              }
            >
              85%
            </span>
          </div>
        </div>
        <div className="cursor-pointer">
          <p>Web Developement</p>
          <div className="w-full h-[6px] rounded-xl relative mt-3 bg-gray-200">
            <span
              className={
                inView
                  ? "absolute top-0 w-[75%] duration-1000 rounded-xl left-0 h-full bg-red-400"
                  : "w-0"
              }
            ></span>
            <span
              className={
                inView
                  ? "font-sans text-[10px] absolute -top-5 right-[22%] duration-1000 bg-gray-300 flex rounded-full justify-center text-black font-bold w-6 h-6 items-center"
                  : " right-[95%]"
              }
            >
              85%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

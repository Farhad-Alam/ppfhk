import { GoBriefcase } from "react-icons/go";
import { useRecoilState } from "recoil";
import { chnageAtom } from "../atoms/changeAtom";
import { FaGraduationCap } from "react-icons/fa";

const ResumeBody = () => {
  const [change, setChange] = useRecoilState(chnageAtom);

  return (
    <div>
      <div className="max-w-4xl mx-auto mt-10 px-3 ">
        <div>
          {/* Left */}
          <div>
            {change ? (
              <div className="space-y-5 md:space-y-10 duration-1000 transform scale-90">
                <div className="grid place-items-center">
                  <FaGraduationCap
                    size={45}
                    className="text-red-500 border-2 p-[6px] rounded-full"
                  />
                  <hr className="w-14 border mt-6 transform rotate-[90deg]" />
                </div>
                <div className="grid grid-cols-2 place-items-center gap-y-4">
                  {/* Left */}
                  <div className="text-sm place-self-end self-start mr-4 bg-red-500 w-[7.5rem] px-4 py-[5px] text-gray-50 rounded-full">
                    2008 - 2010
                  </div>
                  {/* Right */}
                  <div className="border-l-2 px-4 relative">
                    <div className="border-2 w-4 h-4 rounded-full border-gray-400 absolute -left-[9px]">
                      <span className="block mx-auto mt-[2px] w-2 h-2 bg-red-400 rounded-full"></span>
                    </div>
                    <h3 className="font-joseFin text-[14px] font-medium my-2">
                      ABC UNIVERSITY OF LOS ANGELES.
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 font-mali">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      cillum dolore eu fugiat aliqua.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 place-items-center gap-y-4">
                  {/* Left */}
                  <div className="border-r-2 px-2 mt-5">
                    <h3 className="font-joseFin text-[14px] font-medium my-2">
                      SPECIALIZATION COURSE
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 font-mali">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      cillum dolore eu fugiat aliqua.
                    </p>
                  </div>
                  {/* Right */}
                  <div className="text-sm ml-4 place-self-start self-start mr-4 relative bg-red-500 w-[7.5rem] px-4 py-[5px] text-gray-50 rounded-full">
                    <div className="border-2 w-4 h-4 rounded-full border-gray-400 absolute -left-[24px]">
                      <span className="block mx-auto mt-[2px] w-2 h-2 bg-red-400 rounded-full"></span>
                    </div>
                    2006 - 2008
                  </div>
                </div>
                <div className="grid grid-cols-2 place-items-center gap-y-4">
                  {/* Left */}
                  <div className="text-sm place-self-end self-start mr-4 bg-red-500 w-[7.5rem] px-4 py-[5px] text-gray-50 rounded-full">
                    2000 - 2004
                  </div>
                  {/* Right */}
                  <div className="border-l-2 px-4 relative">
                    <div className="border-2 w-4 h-4 rounded-full border-gray-400 absolute -left-[9px]">
                      <span className="block mx-auto mt-[2px] w-2 h-2 bg-red-400 rounded-full"></span>
                    </div>
                    <h3 className="font-joseFin text-[14px] font-medium my-2">
                      ABC HIGH SCHOOL.
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 font-mali">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      cillum dolore eu fugiat aliqua.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className={`space-y-5 md:space-y-10 duration-1000 transform ${
                  change && "scale:90"
                }`}
              >
                <div className="grid place-items-center">
                  <GoBriefcase
                    size={45}
                    className="text-red-500 border-2 p-[6px] rounded-full"
                  />

                  <hr className="w-14 border mt-6 transform rotate-[90deg]" />
                </div>
                <div className="grid grid-cols-2 place-items-center gap-y-4">
                  {/* Left */}
                  <div className="text-sm place-self-end self-start mr-4 bg-red-500 w-[7.5rem] px-4 py-[5px] text-gray-50 rounded-full">
                    2016 - 2019
                  </div>
                  {/* Right */}
                  <div className="border-l-2 px-4 relative">
                    <div className="border-2 w-4 h-4 rounded-full border-gray-400 absolute -left-[9px]">
                      <span className="block mx-auto mt-[2px] w-2 h-2 bg-red-400 rounded-full"></span>
                    </div>
                    <h3 className="font-joseFin text-[14px] font-medium my-2">
                      ART DIRECTOR - FACEBOOK INC.
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 font-mali">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      cillum dolore eu fugiat aliqua.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 place-items-center gap-y-4">
                  {/* Left */}
                  <div className="border-r-2 px-2 mt-5">
                    <h3 className="font-joseFin text-[14px] font-medium my-2">
                      WEB DESIGNER - GOOGLE INC.
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 font-mali">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      cillum dolore eu fugiat aliqua.
                    </p>
                  </div>
                  {/* Right */}
                  <div className="text-sm ml-4 place-self-start self-start mr-4 relative bg-red-500 w-[7.5rem] px-4 py-[5px] text-gray-50 rounded-full">
                    <div className="border-2 w-4 h-4 rounded-full border-gray-400 absolute -left-[24px]">
                      <span className="block mx-auto mt-[2px] w-2 h-2 bg-red-400 rounded-full"></span>
                    </div>
                    2013 - 2016
                  </div>
                </div>
                <div className="grid grid-cols-2 place-items-center gap-y-4">
                  {/* Left */}
                  <div className="text-sm place-self-end self-start mr-4 bg-red-500 w-[7.5rem] px-4 py-[5px] text-gray-50 rounded-full">
                    2010 - 2019
                  </div>
                  {/* Right */}
                  <div className="border-l-2 px-4 relative">
                    <div className="border-2 w-4 h-4 rounded-full border-gray-400 absolute -left-[9px]">
                      <span className="block mx-auto mt-[2px] w-2 h-2 bg-red-400 rounded-full"></span>
                    </div>
                    <h3 className="font-joseFin text-[14px] font-medium my-2">
                      SENIOR DEVELOPER - ABC INC.
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 font-mali">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      cillum dolore eu fugiat aliqua.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Right */}
        </div>
      </div>
    </div>
  );
};

export default ResumeBody;

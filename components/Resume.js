import { AiFillRead } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { chnageAtom } from "../atoms/changeAtom";
import ResumeBody from "./ResumeBody";
import Clients from "./Clients";

const Resume = () => {
  const [change, setChange] = useRecoilState(chnageAtom);

  return (
    <div className="my-[5rem]" id="resume">
      <div className="text-center">
        <h1 className="text-4xl font-joseFin text-gray-600">My Resume</h1>
        <hr className="w-[5rem] border- border-red-500 mt-5 mx-auto" />
      </div>
      {/* Buttons */}
      <div className="mt-[4rem] flex justify-center px-4 py-2 rounded-full text-sm font-mali">
        <button
          onClick={() => setChange(false)}
          className={
            !change
              ? "flex justify-center px-[30px] py-[10px] text-white rounded-l-[30px] bg-black items-center space-x-2"
              : "flex justify-center px-[30px] py-[10px] text-white rounded-l-[30px] bg-gray-500 items-center space-x-2 "
          }
        >
          <AiFillRead size={18} className={!change && "text-red-500"} />
          <span>EXPERIENCE</span>
        </button>
        <button
          onClick={() => setChange(true)}
          className={
            change
              ? "flex justify-center px-[30px] py-[10px] text-white rounded-r-[30px] bg-black items-center space-x-2"
              : "flex justify-center px-[30px] py-[10px] text-white rounded-r-[30px] bg-gray-500 items-center space-x-2 "
          }
        >
          <FaGraduationCap size={18} className={change && "text-red-500"} />
          <span>EDUCATION</span>
        </button>
      </div>
      {/* Body */}
      <ResumeBody />
      <Clients />


    </div>
  );
};

export default Resume;

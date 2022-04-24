import Link from "next/link";
import { CgClose } from "react-icons/cg";
import { FiLogIn } from "react-icons/fi";
import { useRecoilState } from "recoil";
import { scaleAtom } from "../atoms/scaleAtom";
import { useRouter } from "next/router";
import { Link as ScrollLink } from "react-scroll";
import Cookies from "js-cookie";

const ScaleBar = () => {
  const [scale, setScale] = useRecoilState(scaleAtom);
  const router = useRouter();
  const token = Cookies.get("token");

  const openMenu = () => {
    setScale(!scale);
  };

  return (
    <div
      className={
        scale
          ? "fixed top-0 left-0 bg-[rgba(0,0,0,0.6)] h-screen w-screen scale-100 duration-500 z-50 flex justify-center items-center"
          : "fixed top-0 left-0 bg-[rgba(0,0,0,0.6)] h-screen w-screen scale-0 duration-500 z-50 flex justify-center items-center"
      }
    >
      <div className="w-[90%] h-[85%] bg-white rounded-xl relative">
        <div
          className="absolute right-8 top-10 cursor-pointer"
          onClick={openMenu}
        >
          <CgClose size={30} className="text-fuchsia-600 " />
        </div>
        <ul className="space-y-8 flex flex-col justify-center items-center h-full ">
          <li className="group flex flex-col space-y-2 scale-anim">
            <ScrollLink
              activeClass="active"
              to="navbar"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={openMenu}
            >
              <p className="font-joseFin link hover:text-gray-500 text-2xl ">
                Home
              </p>
            </ScrollLink>
          </li>
          <li className="group flex flex-col space-y-2 scale-anim">
            <ScrollLink
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={openMenu}
            >
              <p className="font-joseFin link hover:text-gray-500 text-2xl">
                About
              </p>
            </ScrollLink>
          </li>
          <li className="group flex flex-col space-y-2 scale-anim">
            <ScrollLink
              activeClass="active"
              to="resume"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={openMenu}
            >
              <p className="font-joseFin link hover:text-gray-500 text-2xl">
                Resume
              </p>
            </ScrollLink>
          </li>
          <li className="group flex flex-col space-y-2 scale-anim">
            <ScrollLink
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={openMenu}
            >
              <p className="font-joseFin link hover:text-gray-500 text-2xl">
                Services
              </p>
            </ScrollLink>
          </li>
          <li className="group flex flex-col space-y-2 scale-anim">
            <ScrollLink
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={openMenu}
            >
              <p className="font-joseFin link hover:text-gray-500 text-2xl">
                Projects
              </p>
            </ScrollLink>
          </li>
          <li className="group flex flex-col space-y-2 scale-anim">
            <ScrollLink
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              onClick={openMenu}
            >
              <p className="font-joseFin link hover:text-gray-500 text-2xl">
                Contact
              </p>
            </ScrollLink>
          </li>
          <div onClick={openMenu}>
            <div className="flex items-center space-x-2 bg-gradient-to-br from-[#f53844] to-[#42378f] py-3 px-8 scale-anim rounded-lg text-white ">
              {!token ? (
                <button
                  onClick={() => {
                    router.push("/auth");
                  }}
                  className=""
                  type="submit"
                >
                  Sign In
                </button>
              ) : (
                <button
                  onClick={() => {
                    Cookies.remove("token");
                    Cookies.remove("userInfo");
                    router.push("/auth");
                  }}
                  className=""
                  type="submit"
                >
                  Sign Out
                </button>
              )}
              <FiLogIn size={16} />
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default ScaleBar;

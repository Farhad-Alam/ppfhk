import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { FiLogIn } from "react-icons/fi";
import { useRecoilState } from "recoil";
import { scaleAtom } from "../atoms/scaleAtom";
import Cookies from "js-cookie";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [scale, setScale] = useRecoilState(scaleAtom);

  const token = Cookies.get("token");

  const router = useRouter();

  const openMenu = () => {
    setClick(!click);
    setScale(!scale);
  };

  const changeBgNav = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => window.addEventListener("scroll", changeBgNav), [navbar]);

  return (
    <div
      className={
        navbar
          ? "bg-white z-10 h-[5.5rem] w-full fixed text-black duration-500 border-b"
          : ""
      }
    >
      <div className="section mx-auto flex justify-between items-center">
        {/* Left */}
        <div className="text-2xl lg:text-3xl font-joseFin cursor-pointer scale-anim">
          <h1
            className={
              navbar
                ? "text-black hover:text-gray-500 duration-300"
                : "text-white hover:text-gray-200 duration-300"
            }
          >
            <ScrollLink
              activeClass="active"
              to="navbar"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <p>Farhad</p>
            </ScrollLink>
          </h1>
        </div>
        {/* Center */}
        <div>
          <ul
            className={
              navbar
                ? "hidden md:flex space-x-5 lg:space-x-8 text-black font-[400] tracking-wide"
                : "hidden md:flex space-x-5 lg:space-x-8 font-[400] text-white tracking-wide"
            }
          >
            <li className="sm:flex block flex-col group">
              <ScrollLink
                activeClass="active"
                to="navbar"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <p className={navbar ? "link hover:text-gray-500" : "link "}>
                  Home
                </p>
              </ScrollLink>
            </li>
            <li className="sm:flex block flex-col group">
              <ScrollLink
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-170}
                duration={500}
              >
                <p className={navbar ? "link hover:text-gray-500" : "link"}>
                  About
                </p>
              </ScrollLink>
            </li>
            <li className="sm:flex block flex-col group">
              <ScrollLink
                activeClass="active"
                to="resume"
                spy={true}
                smooth={true}
                offset={-130}
                duration={500}
              >
                <p className={navbar ? "link hover:text-gray-500" : "link"}>
                  Resume
                </p>
              </ScrollLink>
            </li>
            <li className="sm:flex block flex-col group">
              <ScrollLink
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                <p className={navbar ? "link hover:text-gray-500" : "link"}>
                  Services
                </p>
              </ScrollLink>
            </li>
            <li className="sm:flex block flex-col group">
              <ScrollLink
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                <p className={navbar ? "link hover:text-gray-500" : "link"}>
                  Projects
                </p>
              </ScrollLink>
            </li>
            <li className="sm:flex block flex-col group">
              <ScrollLink
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <p className={navbar ? "link hover:text-gray-500" : "link"}>
                  Contact
                </p>
              </ScrollLink>
            </li>
          </ul>
          <div className="block md:hidden" onClick={openMenu}>
            <CgMenuRightAlt
              size={30}
              className={
                navbar
                  ? "text-black hover:text-gray-500 cursor-pointer scale-anim"
                  : "text-white hover:text-gray-200 cursor-pointer scale-anim"
              }
            />
          </div>
        </div>
        {/* Right */}
        <div className="hidden md:flex items-center space-x-2 bg-gradient-to-br from-[#f53844] to-[#42378f] py-2 px-4  rounded-lg text-white ">
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
    </div>
  );
};

export default Navbar;

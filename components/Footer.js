import {
  AiFillInstagram,
  AiFillLinkedin,
  AiTwotoneMail,
  AiTwotonePhone,
} from "react-icons/ai";
import { FaAddressCard, FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <div
      className="w-[100vw] lg:h-[90vh] text-white bg-footer py-5 relative"
      id="contact"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 place-items-center h-full space-y-4">
        {/* Left */}
        <div className="bg-[rgba(0,0,0,0.4)] rounded-xl p-4 lg:p-10">
          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-joseFin ">Get In Touch</h1>
            <hr className="w-[5rem] border border-red-500 mt-5 mx-auto sm:mx-0" />
            <ContactForm />
          </div>
        </div>
        {/* Right */}
        <div className="w-[45%] md:w-[60%] text-center font-joseFin bg-[rgba(0,0,0,0.5)] p-10 rounded-md shadow-2xl space-y-4">
          <div className="">
            <AiTwotonePhone
              size={28}
              className="text-cyan-400 scale-anim cursor-pointer mx-auto mb-4"
            />
            <p className="text-sm font-semibold">Phone</p>
            <span className="text-xs">+123456789</span>
          </div>
          <div>
            <AiTwotoneMail
              size={28}
              className="text-cyan-400 scale-anim cursor-pointer mx-auto mb-4"
            />
            <p className="text-sm font-semibold">Email</p>
            <span className="text-xs">irfanmini11@gmail.com</span>
          </div>
          <div>
            <FaAddressCard
              size={28}
              className="text-cyan-400 scale-anim cursor-pointer mx-auto mb-4"
            />
            <p className="text-sm font-semibold">Address</p>
            <span className="text-xs">Bangladesh</span>
          </div>
          <div className="flex space-x-8 justify-center">
            <Link href="https://www.facebook.com/Farhad7865">
              <a>
                <FaFacebookSquare
                  size={25}
                  className="text-cyan-400 cursor-pointer scale-anim "
                />
              </a>
            </Link>
            <Link href="/">
              <a>
                <AiFillInstagram
                  size={25}
                  className="text-cyan-400 cursor-pointer scale-anim "
                />
              </a>
            </Link>
            <Link href="/" className="border-2 ">
              <a>
                <AiFillLinkedin
                  size={25}
                  className="text-cyan-400 cursor-pointer scale-anim "
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

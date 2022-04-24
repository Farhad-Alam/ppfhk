import Typical from "react-typical";
import TypeAnimation from "react-type-animation";

const Header = () => {
  return (
    <div className="absolute top-0 right-0 left-0 -z-50">
      {/* Left */}
      <div className="clip">
        <img
          className="w-full h-[110vh] object-cover"
          src="/images/unnamed.jpg"
          alt="Picture of the author"
        />
        <div className="absolute top-0 bg-[rgba(0,0,0,0.5)] w-full h-[110vh]"></div>
      </div>

      {/* Right */}
      <div className="absolute w-full top-[42%] left-[50%] translate-x-[-50%] text-white text-center space-y-4">
        <p>Hello!!</p>
        <h1 className="text-6xl font-joseFin font-[500] uppercase">
          I am Farhad
        </h1>
        <div className="font-joseFin">
          <TypeAnimation
            className="text-red-200 text-xl"
            sequence={[
              "Web Designer",
              1000,
              "UI/UX Designer",
              1000,
              "Web Developer",
              1000,
            ]}
            repeat={Infinity}
            wrapper="h2"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

import { Data } from "../Data/data";

const Services = () => {
  return (
    <section className="max-w-6xl mx-auto my-40" id="services">
      <div className="">
        <h1 className="text-4xl text-center font-joseFin text-gray-600">
          My Services
        </h1>
        <hr className="w-[5rem] border border-red-500 mt-5 mx-auto" />
      </div>

      {/* Body */}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 mt-20 p-5 gap-8">
        {Data.map((elem, i) => {
          return (
            <div
              className="border p-4 space-y-4 text-center rounded-lg shadow-xl"
              key={i}
            >
              {elem.icon}
              <p className="font-joseFin text-lg">{elem.title}</p>
              <p className="text-sm md:text-base font-thin tracking-wider">
                {elem.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;

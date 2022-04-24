import { GrTechnology } from "react-icons/gr";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { detailsState } from "../atoms/detailsAtom";
import { projectState } from "../atoms/projectAtom";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";

const Modal = () => {
  const [show, setShow] = useRecoilState(modalState);
  const [detail, setdetail] = useRecoilState(detailsState);
  const [projectData, setprojectData] = useRecoilState(projectState);
  const [details, setdetails] = useState([]);

  function closeModal() {
    setShow(false);
  }
  function openModal() {
    setShow(true);
  }

  // get the single details

  useEffect(() => {
    const singleDetails = projectData.filter((elem) => {
      return elem.id === Number(detail);
    });
    setdetails(singleDetails);
  }, []);

  return (
    <div className="">
      <div>
        <Transition appear show={show} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={closeModal}
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>

              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <div className="text-center">
                    <GrTechnology className="mx-auto icon mb-2" />
                    <p className="text-gray-500 font-semibold text-sm  pb-2">
                      Technologies I use for this project !!
                    </p>
                  </div>
                  <div className="">
                    {details.map((elem, index) => {
                      const { frontend, backend, other, link } = elem;
                      return (
                        <div key={elem.id}>
                          <div className="flex justify-around">
                            {/* left */}
                            <div className="p-2 ">
                              <h2 className="text-[15px] font-semibold">
                                Frontend
                              </h2>
                              <p className="text-[13px]">
                                {frontend.map((elem) => {
                                  return <div key={elem.id}>{elem}</div>;
                                })}
                              </p>
                            </div>
                            {/* center */}
                            <div className=" p-2">
                              <h2 className="text-[15px] font-semibold">
                                Backend
                              </h2>
                              <p className="text-[13px]">{backend}</p>
                            </div>
                            {/* right */}
                            <div className="p-2">
                              <h2 className="text-[15px] font-semibold">
                                Other Necessaries
                              </h2>
                              <p className="text-[13px]">
                                {other.map((elem) => {
                                  return <div key={elem.id}>{elem}</div>;
                                })}
                              </p>
                            </div>
                          </div>
                          <p className="text-sm scale-anim font-semibold font-joseFin tracking-wide cursor text-center mt-4 text-green-400">
                            <Link href={link}>
                              <a>{link}</a>
                            </Link>
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
    </div>
  );
};

export default Modal;

import Head from "next/head";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { scaleAtom } from "../atoms/scaleAtom";
import About from "../components/About";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import ScaleBar from "../components/ScaleBar";
import Services from "../components/Services";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

export default function Home() {
  const [show, setShow] = useRecoilState(modalState);

  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <Head>
        <title>Farhad Folio</title>
        <meta name="description" content="Wellcome to my portfolio" />
      </Head>

      <div>
        <main>
          <div id="navbar">
            <Navbar />
          </div>
          <ScaleBar />
          <div className="w-screen h-[110vh]">
            <Header />
          </div>
          <About />
          <Resume />
          <Services />
          <Carousel />
          <Projects />
          <Footer />
        </main>
        {show && <Modal />}
      </div>
    </div>
  );
}

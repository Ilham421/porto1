import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Bot from "./Bot";
import { useState,useEffect } from "react";
import hero from "../assets/images/hero.webp";

const Hero = () => {

  const social_media = [
    "logo-instagram",
    "logo-facebook",
    "logo-linkedin",
    "logo-github",
  ];

  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])

  return (
    <div>
      {
        loading ?
        <motion.div
          className="bg-lime-800 min-h-screen overflow-hidden grid justify-items-center items-center m-0 p-0"

          initial={{
            x: "50%",
            opacity: 0,
            scale: 1
          }}

          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}

          transition={{
            duration: 0.8,
            ease: "easeOut"
          }}

          exit={{
            x: "50%",
            opacity: 0
          }}

        >
          <p className="md:text-6xl font-semibold animate-pulse text-4xl text-center">HOME</p>
        </motion.div>

        :
        <div>
          <Navbar />
          <section id="home" className="min-h-screen flex py-20 md:flex-row flex-col items-center">
            <title>Ilham|Home</title>
            <div className="flex-1 flex items-center justify-center h-full" data-aos="fade-right" data-aos-duration="1500">
              <img src={hero} loading="lazy" alt="me"  width="300px" height="" className="md:w-11/12 h-full object-fit" />
            </div>
            <div className="flex-1 whitespace-nowrap">
              <div className="md:text-left text-center">
                <h1 className="md:text-4xl text-2xl md:leading-normal leading-10 text-white font-bold">
                  <span className="text-cyan-600 md:text-6xl text-5xl mt-2 md:mt-0" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                    Hello!
                  <br />
                  </span >
                  My Name is <span data-aos="fade-down-left" data-aos-duration="1000" data-aos-offset="50" data-aos-delay="350">Mohamad Ilham</span>
                </h1>
                <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600" 
                data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="50" data-aos-delay="350">
                  Junior Web Developer
                </h4>
                <button onClick={(e) => {
                  e.preventDefault();
                  window.open("https://linktr.ee/contactIlham", "_blank")
                }} className="bg-green-500 rounded-full p-5 mt-8 text-lg text-black font-semibold hover:shadow-lg hover:bg-green-500 hover:text-black hover:font-bold transform transition duration-1000 ease-in-out hover:scale-110">
                <i className="bi bi-chat-dots pr-2"></i>Let's Chat<i className="bi bi-arrow-right pl-2"></i>
                </button>
                <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5"
                data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="20" data-aos-delay="350" data-aos-once="true">
                  {social_media?.map((icon) => (
                    <div
                      key={icon}
                      className="text-gray-600 hover:text-white cursor-pointer "
                    >
                      <ion-icon name={icon}></ion-icon>
                    </div>
                  ))}
                </div>
                <hr className="mt-10" />
                <h1 className="pl-6 pt-3 md:pl-1 text-left font-semibold text-lg text-slate-300">More</h1>
                <div className="flex md:justify-start items-center justify-center group gap-10 flex-wrap text-center">
                  <button onClick={(e)=>{
                    e.preventDefault();
                    window.location.href='/about';
                  }} className="md:w-[520px] w-[310px] h-[85px] bg-red-400 rounded-2xl px-5 py-2 mt-8 hover:shadow-lg hover:text-black hover:font-semibold transform transition duration-1000 ease-in-out hover:scale-90">
                  <i class="bi bi-person-square pl-10 pr-5 text-2xl"></i><span className="text-xl">ABOUT</span><i className="bi bi-arrow-down pr-10- pl-5 text-2xl"></i>
                  </button>
                  <button onClick={(e)=>{
                    e.preventDefault();
                    window.location.href='/contact';
                  }} className="md:w-[520px] w-[310px] h-[85px] bg-blue-500 rounded-2xl px-5 mt-8 hover:shadow-lg hover:text-black hover:font-semibold transform transition duration-1000 ease-in-out hover:scale-90">
                  <i className="bi bi-chat-dots pl-10 pr-5 text-2xl"></i><span className="text-xl">CONTACT</span><i className="bi bi-arrow-down pr-10 pl-5 text-xl"></i>
                  </button>
                </div>
              </div>
            </div>
          </section>
          <Footer />
          <Bot  />
        </div>
      }
    </div>
  );
};

export default Hero;

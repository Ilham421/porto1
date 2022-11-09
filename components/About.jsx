import React from "react";
import Navbar from "./Navbar"
import Footer from "./Footer";
import Bot from "./Bot";
import { useState,useEffect } from "react";
import Hireme from "./Hireme";
import cv from "../assets/Curiculum_Vitae.pdf"
import aboutImg from "../assets/images/about.webp";
const About = () => {
  const info = [
    { text: "Years experience", count: "02" },
    { text: "Completed Projects", count: "04" },
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
        <div className="bg-lime-800 min-h-screen grid justify-items-center items-center m-0 p-0">
          <p className="md:text-6xl font-semibold animate-pulse text-4xl text-center">ABOUT</p>
        </div>

        :
        <div>
        <Navbar />
        <section id="about" className="min-h-screen py-20 mt-10 text-white">
          <title>Ilham|About</title>
          <div className="text-center mt-8">
            <h3 className="text-4xl font-semibold" data-aos="fade-down" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
              About <span className="text-cyan-600">Me</span>
            </h3>
            <p className="text-gray-400 my-3 text-lg" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200" data-aos-offset="320" data-aos-once="true">My introduction</p>
            <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
              <div className="p-2">
                <div className="text-gray-300 my-3">
                  <p className="text-justify leading-7 w-11/12 mx-auto" data-aos="fade-up-right" data-aos-duration="1000" data-aos-delay="350" data-aos-offset="320" data-aos-once="true">
                    Graduates of majoring in Software Engineering from 1st Public Vocational High School Babelan who have an interest in programming. Experienced in doing web developmenet. Someone who wants to gain new experience in programming field. Open to job opportunities in the field of web development.
                  </p>
                  <div className="flex mt-10 items-center gap-7" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="430" data-aos-offset="100" data-aos-once="true">
                    {info.map((content) => (
                      <div key={content.text}>
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">
                          {content.count}
                          <span className="text-cyan-600">+</span>{" "}
                        </h3>
                        <span className="md:text-base text-xs">{content.text}</span>
                      </div>
                    ))}
                  </div>
                  <br />
                  <br />
                  <div className="flex wrap-flex p-5">
                    <a href={cv} target="_blank" className="block" download>
                      <button className="btn-primary p-5 mt-8 hover:shadow-lg hover:text-black transform transition duration-1000 ease-in-out hover:scale-110">
                      <i className="bi bi-envelope-paper pr-2"></i>Download CV<i className="bi bi-arrow-down pl-2"></i>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
                <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg" data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="50" data-aos-delay="200" data-aos-once="true">
                  <img
                    src={aboutImg}
                    alt="about"
                    className="w-full object-cover bg-cyan-600 rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
          <Hireme />
        </section>
        <Footer />
        <Bot />
        </div>
      }
    </div>
    
  );
};

export default About;

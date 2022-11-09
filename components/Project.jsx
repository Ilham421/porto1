import React from "react";
import Navbar from "./Navbar"
import Footer from "./Footer";
import Bot from "./Bot";
import { useState,useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.webp";
import project2 from "../assets/images/project-2.webp";
import project3 from "../assets/images/project-3.webp";
import project4 from "../assets/images/project-4.webp";
import project5 from "../assets/images/project-5.webp";
import project6 from "../assets/images/project-6.webp";
import project_person from "../assets/images/project_person1.webp";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  
  const projects = [
    {
      img: project1,
      name: "Marketplace MCD",
      github_link: "https://github.com/Ilham421/marketplace_mcd",
      live_link: "https://hey-ilham-portofolio.netlify.app",
    },
    {
      img: project2,
      name: "Buku Tamu BLK",
      github_link: "https://github.com/Ilham421/bukutamu_blk",
      live_link: "https://hey-ilham-portofolio.netlify.app",
    },
    {
      img: project3,
      name: "Landing Page Programmer",
      github_link: "https://github.com/Ilham421/landingpage_programmer",
      live_link: "https://landing-page-programer.netlify.app/",
    },
    {
      img: project4,
      name: "Marketplace MCD Frontend",
      github_link: "https://github.com/Ilham421/marketplace_mcd_frontend",
      live_link: "https://mcd-frontend.netlify.app/",
    },
    {
      img: project5,
      name: "Games Pukul Tikus",
      github_link: "https://github.com/Ilham421/game_pukul_tikus",
      live_link: "https://games-tikus.netlify.app/",
    },
    {
      img: project6,
      name: "Games Kertas Gunting Batu",
      github_link: "https://github.com/Ilham421/games-kertas-gunting-batu",
      live_link: "https://games-kertas-gunting-batu.netlify.app/",
    },
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
          <p className="md:text-6xl font-semibold animate-pulse text-4xl text-center">PROJECTS</p>
        </div>

        :
        <div>
          <Navbar />
          <section id="projects" className="min-h-screen py-20 mt-10 text-white">
            <title>Ilham|My Projects</title>
            <div className="text-center">
              <h3 className="text-4xl font-semibold" data-aos="fade-down" data-aos-duration="1000" data-aos-offset="350">
                My <span className="text-cyan-600">Projects</span>
              </h3>
            </div>
            <br />
            <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
              <div className="lg:w-2/3 w-full">
                <Swiper
                  slidesPerview={1.2}
                  spaceBetween={20}
                  breakpoints={{
                    768: {
                      slidesPerView: 2,
                    },
                  }}
                  loop={true}
                  autoplay={{
                    delay: 3000,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination, Autoplay]}
                >
                  {projects.map((project_info, i) => (
                    <SwiperSlide key={i}>
                      <div className="h-fit w-full p-4 bg-slate-700 rounded-xl" data-aos="fade-up-right" data-aos-duration="1000" data-aos-offset="300">
                        <img src={project_info.img} alt="my project" className="rounded-lg object-contain h-50 w-30" />
                        <h3 className="text-xl my-4">{project_info.name}</h3>
                        <div className="flex gap-3">
                          <a
                            href={project_info.github_link}
                            target="_blank"
                            className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                          >
                            Github
                          </a>
                          <a
                            href={project_info.live_link}
                            target="_blank"
                            className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                          >
                            Live Demo
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="lg:block hidden">
                <img src={project_person} width="400px" alt="works" />
              </div>
            </div>
          </section>
          <Footer />
          <Bot />
        </div>
      }
    </div>
  );
};

export default Project;

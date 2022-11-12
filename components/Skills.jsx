import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar"
import Footer from "./Footer";
import Bot from "./Bot";
import { useState,useEffect } from "react";

const Skills = () => {

  const skills = [
    {
      logo: "logo-html5",
      level: "Intermediate",
      count: 68,
    },
    {
      logo: "logo-css3",
      level: "Beginner",
      count: 55,
    },
    {
      logo: "logo-javascript",
      level: "Beginner",
      count: 35,
    },
    {
      logo: "logo-nodejs",
      level: "Beginner",
      count: 25,
    },
    {
      logo: "logo-react",
      level: "Beginner",
      count: 30,
    },
    {
      logo: "logo-github",
      level: "Beginner",
      count: 45,
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
        <motion.div
          className="bg-lime-800 min-h-screen grid justify-items-center items-center m-0 p-0"

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
          <p className="md:text-6xl font-semibold animate-pulse text-4xl text-center">SKILLS</p>
        </motion.div>

        :
        <div>
          <Navbar />
          <section id="skills" className="min-h-screen py-20 mt-10 bg-gray-800">
            <title>Ilham|My Skills</title>
            <div className="mt-8 text-gray-100 text-center">
              <h3 className="text-4xl font-semibold" data-aos="fade-down" data-aos-duration="1000" data-aos-offset="300">
                My <span className="text-cyan-600">Skills</span>
              </h3>
              <p className="text-gray-400 mt-3 text-lg" data-aos="fade-down" data-aos-duration="1000" data-aos-offset="300">My knowledge</p>
              <div className="flex items-center justify-center mt-12 gap-10 flex-wrap skill" data-aos="fade-up-right" data-aos-duration="1000" data-aos-delay="250" data-aos-offset="300">
                {skills?.map((skill, i) => (
                  <div
                    key={i}
                    className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
                  >
                    <div
                      style={{
                        background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                      }}
                      className="w-32 h-32 flex items-center justify-center rounded-full"
                    >
                      <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                        <ion-icon name={skill.logo}></ion-icon>
                      </div>
                    </div>
                    <p className="text-xl mt-3">{skill.level}</p>
                  </div>
                ))}
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

export default Skills;

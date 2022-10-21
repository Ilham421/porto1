import React from "react";
import aboutImg from "../assets/images/about.png";
const About = () => {
  const info = [
    { text: "Years experience", count: "02" },
    { text: "Completed Projects", count: "04" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold" data-aos="fade-down" data-aos-duration="1000" data-aos-offset="300">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200" data-aos-offset="320">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto" data-aos="fade-up-right" data-aos-duration="1000" data-aos-delay="350" data-aos-offset="320">
                I am student majoring in Software Engineering from the 1st Public Vocational School Babelan.
              </p>
              <div className="flex mt-10 items-center gap-7" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="430" data-aos-offset="270">
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
              <a href="./src/assets/Code_a_program.pdf" download>
                <button className="btn-primary mt-8 hover:shadow-lg hover:text-black transform transition duration-500 hover:scale-110" download>Contact Me</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg" data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="275" data-aos-delay="200">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

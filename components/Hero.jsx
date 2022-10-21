import React from "react";
import hero from "../assets/images/hero.png";
const Hero = () => {
  const social_media = [
    "logo-instagram",
    "logo-facebook",
    "logo-linkedin",
    "logo-twitter",
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full" data-aos="fade-right" data-aos-duration="1500">
        <img src={hero} alt="" width="300px" height="" className="md:w-11/12 h-full object-fit" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
              Hello!
              <br />
            </span >
            My Name is <span data-aos="fade-left" data-aos-duration="10000" data-aos-delay="350">Mohama Ilham</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Junior Web Developer
          </h4>
          <button className="btn-primary mt-8 hover:shadow-lg hover:text-black transform transition duration-500 hover:scale-110">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <a href=""><ion-icon name={icon}></ion-icon></a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

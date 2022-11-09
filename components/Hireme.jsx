import React from "react";
import hireMe from "../assets/images/hireMe.webp";

const Hireme = () => {
  
  return (
    <section id="hireme" className="py-20 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold" data-aos="fade-down" data-aos-duration="1000" data-aos-offset="450" data-aos-once="true">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg" data-aos="fade-down" data-aos-duration="1000" data-aos-offset="300" data-aos-delay="200" data-aos-once="true">Job Seekers</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-2 lg:max-w-4xl mx-auto min-h-[24rem] mt-10 flex gap-6 lg:flex-row flex-col-reverse items-center" data-aos="fade-down" data-aos-duration="1000" data-aos-offset="275" data-aos-once="true">
        <div>
          <h2 className="text-2xl font-semibold" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="300" data-aos-delay="300" data-aos-once="true">
            Would you like to offer me a job?
          </h2>
          <h2 className="text-2xl font-semibold py-10" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="300" data-aos-delay="300" data-aos-once="true">
            Let's Work Together 🤝
          </h2>
          <form action="https://linktr.ee/contactIlham" target="_blank">
            <button className="btn-primary mt-10 hover:shadow-lg hover:text-black transform transition duration-1000 ease-in-out hover:scale-110"><i class="bi bi-envelope-open-heart pr-2"></i>Say Hello 👋<i className="bi bi-arrow-right pl-2"></i></button>
          </form>
        </div>
        <img data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="275" data-aos-delay="400" data-aos-once="true"
          src={hireMe}
          alt="say helo"
          className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover"
        />
      </div>
    </section>
  );
};

export default Hireme;

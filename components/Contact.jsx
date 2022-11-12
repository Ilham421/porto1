import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar"
import Footer from "./Footer";
import Bot from "./Bot";
import { useState,useEffect } from "react";
import emailjs from 'emailjs-com';
import {useRef} from 'react';

 const ContactUS = () => {
  // Contact
  const contact_info = [
    { 
      logo: "mail", 
      text: "ilhammohamad614@gmail.com" 
    },
    { 
      logo: "logo-whatsapp", 
      text: "+62 813 8508 5695" 
    },
    {
      logo: "location",
      text: "Bekasi, West Java, Indonesian",
    },
  ];


  // Form Contact
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_9k8a7qc', 'template_m3foj3m', form.current, '4Wd5ml75_HLInNlUW')
      .then((result) => {
        const sukses = document.getElementById("sukses");
        sukses.classList.remove("hidden");
        setTimeout(() => {
          sukses.style.display = 'none'
      }, 2500)
      }, (error) => {
        const gagal = document.getElementById("gagal");
        gagal.classList.remove("hidden");
        setTimeout(() => {
          sukses.style.display = 'none'
      }, 2500)
      });
      e.target.reset()
  };


  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])

  // Eksekusi
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
          <p className="md:text-6xl font-semibold animate-pulse text-4xl text-center">CONTACT</p>
        </motion.div>

        :
        <div>
          <Navbar />
          <section id="contact" className="min-h-screen py-20 mt-10 px-3 text-white">
            <title>Ilham|Contact</title>
            <div className="text-center mt-8">
              <h3 className="text-4xl font-semibold" data-aos="fade-down" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
                Contact <span className="text-cyan-600">Me</span>
              </h3>
              <p className="text-gray-400 mt-3 text-lg" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="300" data-aos-delay="200" data-aos-once="true">Get in touch</p>

              <div
                className="mt-16 flex md:flex-row flex-col
              gap-6 max-w-5xl bg-gray-800 md:p-6 md:pb-5 md:pt-5 p-2 rounded-lg mx-auto"
              data-aos="fade-up" data-aos-duration="1000" data-aos-offset="350" data-aos-once="true"
              >
              <form name="form-contact" ref={form} onSubmit={sendEmail} className="flex flex-col flex-1 gap-5">
                <h2 className="text-2xl font-semibold uppercase" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="300" data-aos-delay="300" data-aos-once="true">
                  Let's Work Together 🤝
                </h2>
                <hr />
                <div id="sukses" className="hidden alert success rounded-lg">
                  <strong>Info!</strong> Send Mesage Successfully.
                </div>
                <div id="gagal" className="hidden alert rounded-lg">
                  <strong>Info!</strong> Message not sent. Please try again or check your connection.
                </div>
                <input name="name" type="text" id="name" placeholder="Your Name" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="300" data-aos-delay="200" data-aos-once="true" required />
                <input type="Email" id="email" name="email" placeholder="Your Email Address" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="300" data-aos-delay="300" data-aos-once="true" required/>
                <input type="text" id="subject" name="subject" placeholder="Subject" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="300" data-aos-delay="400" data-aos-once="true" />
                <textarea id="msg" name="message" placeholder="Your Message" rows={10} data-aos="fade-right" data-aos-duration="1000" data-aos-offset="300" data-aos-delay="500" data-aos-once="true" required></textarea>
                <button id="btn-form" type="submit" className="btn-primary w-fit pb-5 hover:shadow-lg hover:text-black transform transition duration-1000 ease-in-out hover:scale-110"><i className="bi bi-envelope-paper pr-2"></i>Send Message<i className="bi bi-arrow-right pl-2"></i></button>
                <br />
              </form>
                <div className="flex flex-col gap-7">
                  {contact_info.map((contact, i) => (
                    <div
                      key={i}
                      className="flex flex-row  
                        text-left gap-4 flex-wrap items-center"
                    >
                      <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full"
                      data-aos="fade-right" data-aos-duration="1000" data-aos-offset="300" data-aos-delay="300" data-aos-once="true"
                      >
                        <ion-icon name={contact.logo}></ion-icon>
                      </div>
                      <p className="md:text-base text-sm  break-words" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="300" data-aos-delay="300" data-aos-once="true" >
                        {contact.text}
                      </p>
                    </div>
                  ))}
                </div>
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

export default ContactUS;
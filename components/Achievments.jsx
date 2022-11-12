import React from "react";
import { motion } from "framer-motion"
import Navbar from "./Navbar"
import Footer from "./Footer";
import Bot from "./Bot";
import { useState,useEffect } from "react";
import sertifikat1 from "../assets/images/sertifikat1.webp";
import sertifikat2 from "../assets/images/sertifikat2.webp";
import sertifikat3 from "../assets/images/sertifikat3.webp";

const Achievment = () => {

    // Data Sertifikat
    const achievment = [
        {
            img: sertifikat1,
            name: "TIKOMDIK Internet of Things",
        },
        {
            img: sertifikat2,
            name: "Programming Lenguage C# and .NET Core",
        },
        {
            img: sertifikat3,
            name: "PBK Program Junior Web Programming",
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
                        <p className="md:text-6xl font-semibold animate-pulse text-4xl text-center">ACHIEVEMENTS</p>
                </motion.div>
        
                :
                <div>
                    <Navbar />
                    <section id="achievment" className="min-h-screen py-20 mt-20 text-white">
                        <title>Ilham|Achievments</title>
                        <h3 className="text-center text-4xl font-semibold" data-aos="fade-down" data-aos-duration="1000" data-aos-offset="300" data-aos-once="true">
                            My <span className="text-cyan-600">Achievements</span>
                        </h3>
                        <div className="flex items-center group justify-center gap-10 flex-wrap text-center mt-8 px-10"
                        data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="150" data-aos-offset="200" data-aos-once="true">
                        {achievment.map((achievment_info) => (
                            <div className="max-w-sm bg-white w-[350px] z-10 rounded-lg border border-gray-200 hover:shadow-lg hover:text-black hover:scale-110 transform transition duration-1000 ease-in-out dark:bg-gray-800 dark:border-gray-700">
                                <div id="zoom-img" className="shadow-lg w-full rounded-t-lg my-auto">
                                    <img className="rounded-t-lg w-full h-[210px] md:h-[230px] shadow-lg" src={achievment_info.img} loading="lazy" alt="certificate"/>
                                </div>
                                <div class="p-5">
                                    <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{achievment_info.name}</h5>
                                </div>
                            </div> 
                        ))}
                        </div>
                    </section>
                    <Footer />
                    <Bot />
                </div>
            }
        </div>
    );
};

export default Achievment;
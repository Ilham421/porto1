import { useState,useEffect } from "react";
import { motion } from "framer-motion";

const PageNotFound= () =>{
    
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
        setLoading(false)
        },2000)
    },[])
        
    return(
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
                    <p className="md:text-6xl font-semibold animate-pulse text-4xl text-center">404</p>
                </motion.div>

                :
                <div>
                     <div className="min-h-screen md:pl-[200px] md:pr-[600px] md:mt-10 px-[29px] py-20 mt-20">
                        <title>404!</title>
                        <h1 className="text-lg md:pl-0 pl-[1px] font-semibold text-green-600 pb-1" data-aos="zoom-in" data-aos-duration="1000">Oops!</h1>
                        <h1 className="text-5xl font-bold pb-1" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="50" data-aos-delay="100">ERROR 404!</h1>
                        <h1 className="text-3xl font-semibold animate-pulse" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="50" data-aos-delay="100">Page not found....</h1>
                        <h1 className="text-4xl font-semibold uppercase pt-7" data-aos="fade-up" dat-aos-duration="1000" data-aos-offset="50" data-aos-delay="200">Are you lost?</h1>
                        <p className="text-gray-600 font-bold pt-2 pb-3" data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="50" data-aos-delay="250">This page is sleeping. Or this link may be broken.</p>
                        <hr className="border-2 border-gray-600"/>
                        <button onClick={(e)=>{
                            e.preventDefault();
                            window.location.href='/';
                        }} className="bg-green-500 rounded-full p-5 mt-8 text-lg text-black font-semibold hover:shadow-lg hover:bg-green-500 hover:text-black hover:font-bold transform transition duration-1000 ease-in-out hover:scale-110">
                        <i className="bi bi-house-door pr-2 text-xl"></i>Back to home
                        </button>
                    </div>
                </div>
            }
        </div>
    )
};

export default PageNotFound;
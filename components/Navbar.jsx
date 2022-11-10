import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "SKILLS", link: "/skills" },
    { name: "ACHIEVEMENTS", link: "/achievements" },
    { name: "PROJECTS", link: "/projects" },
    { name: "CONTACT", link: "/contact" },
  ];
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 90 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav id="navbar-hidden"
      className={`fixed w-full left-0 top-0 z-[999] backdrop-blur-sm topnav ${
        sticky ? "bg-white/60  text-gray-900" : "text-white"
      }`}
    >      
      <div className="flex items-center justify-between ">
        <Link to="/">
          <div className="mx-7">
            <h4 className="text-3xl uppercase font-bold">
              <span>&copy;</span>
              I<span className="text-cyan-600">L</span>H
              <span className="text-cyan-600">A</span>M
            </h4>
          </div>
        </Link>
        <div
          className={` ${
            sticky ? "md:bg-white/0 bg-white" : "bg-white"
          } text-gray-900 md:block hidden px-7 py-2 font-medium rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-cyan-600">
                <Link to={menu?.link}>{menu?.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999]  ${
            open ? "text-gray-900" : "text-gray-100"
          } text-3xl md:hidden m-5`}
        >
          <ion-icon name="menu"></ion-icon>
        </div>
        <div
          className={`md:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-1000 ease-in-out ${
        open ? "right-0" : "right-[-100%] origin-center rotate-45 translate-x-40"
      }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 hover:text-cyan-600"
              >
                <Link to={menu?.link}>{menu?.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

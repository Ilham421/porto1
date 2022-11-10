import React from "react";
import { useState,useEffect } from "react";
import { Routes, Route } from "react-router";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Achievments from "./components/Achievments";
import PageNotFound from "./components/PageNotFound";

const App = () => {

  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },500)
  },[])
  
  return (
    <div>
        <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/projects" element={<Project/>} />
          <Route path="/say" element={<Hireme/>} />
          <Route path="/achievements" element={<Achievments/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
    </div>
  );
};

export default App;

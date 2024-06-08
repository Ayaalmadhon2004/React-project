import React from 'react';
import Navbar from '../navbar/Navbar';
import Hero from '../hero/Hero';
import pic3 from "../travel3.jpg";
import "../hero/hero.css";

const About = () => {
  return (
    <>
    <Navbar/>
    <Hero
      cName="hero-mid"
      heroImg={pic3}
      title="Your Journey Your Story"
      btnClass="hide"
    />
    </>
  );
}

export default About;

import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
const Hero = () => {
  return (
    <div id="home" className="hero">
      <img className="profile" src={profile_img} />
      <h1>
        <span>I'm Tanvi,</span>a frontend developer based in India.
      </h1>
      <p>
        I am a frontend developer based in India and currently pursuing a B.Tech
        degree in Computer Science from IGDTUW,Delhi.
      </p>
      <a href="https://drive.google.com/file/d/1UcYdRrr8JrYGY3gBvdI30zoOwEfCuSXT/view?usp=sharing" target='_blank'>
        <div className="resume">Resume</div>
      </a>
    </div>
  );
}

export default Hero

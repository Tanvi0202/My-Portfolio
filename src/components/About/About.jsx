import React from "react";
import "./About.css";
import avtar from "../../assets/avtar.png";
import theme_pattern from "../../assets/theme_pattern.svg";

const About = () => {
  return (
    <div  id='about' className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern}></img>
      </div>

      <div className="about-section">
        <div className="about-left">
          <img src={avtar}></img>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a frontend developer from India, currently pursuing a B.Tech
              degree in Computer Science from IGDTUW, Delhi and have and
              aggregate cgpa of 8.77/10.
            </p>
            <p>
              Relevent Coursework : ,C/C++,Data Structures and Algorithms, DBMS,
              Operating System, OOPS, Computer Networks
            </p>
            <p>
              My passion for frontend development is reflected in the enthusiasm
              and dedication I bring to my projects.
            </p>
          </div>
          <div className="about-skills">
            <div className="skill"><p>HTML & CSS</p><hr style={{ width: "50%"}}></hr></div> 
            <div className="skill"><p>JAVASCRIPT</p><hr style={{ width: "45%"}}></hr></div> 
            <div className="skill"><p>REACT JS</p><hr style={{ width: "45%"}}></hr></div> 
            <div className="skill"><p>DESIGN</p><hr style={{width:"30%"}}></hr></div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

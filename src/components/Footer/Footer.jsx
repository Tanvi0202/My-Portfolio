import React from "react";
import "./Footer.css";
import instagram from "../../assets/instagram.jpg";
import X from "../../assets/X.jpg";
import linkedin from "../../assets/linkedin.jpg";
import github from "../../assets/github.jpg";

const Footer = () => {
  return (
    <div id='fot'className="footer">
      <hr style={{ width: "90%" }} />
      <div className="f-title">
        <h3>Let's Connect</h3>
      </div>
      <div className="f-con">
        <a href="https://www.instagram.com/ta.nvi5596/" target="_blank">
          <img src={instagram}></img>
        </a>
        <a href="https://x.com/tanvikwatra18" target="_blank">
          <img src={X}></img>
        </a>
        <a href="https://www.linkedin.com/in/tanvi-294032234/" target="_blank">
          <img src={linkedin}></img>
        </a>
        <a href="https://github.com/Tanvi0202" target="_blank">
          <img src={github}></img>
        </a>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import "./Projects.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";

const Projects = () => {
  return (
    <div id='project'className="projects">
      <div className="pr-title">
        <h1>My Projects</h1>

        <img src={theme_pattern}></img>
      </div>
      <div className="pr-container">
        {mywork_data.map((work, index) => {
          return (
            <div key={index} style={{ textAlign: "center" }}>
              <a href={work.w_link}>
                <img
                  style={{ marginBottom: "20px" }}
                  src={work.w_img}
                  target="_blank"
                />
              </a>
              <p style={{fontFamily:'Outfit', lineHeight:'20px',fontSize:'18px'}}>{work.w_desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import ImageSlider from "../ImageSlider";
import "./Project.css";
const Project = () => {
  return (
    <>
      <section className="project-section">
        <h1 className="project-section-heading">Project</h1>
        <h1 className="project-section-heading1">Our Project</h1>
        <ImageSlider />
      </section>
    </>
  );
};

export default Project;

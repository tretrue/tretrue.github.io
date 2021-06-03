import "./Projects.css";
import React from "react";
import ProjectTabs from "../../components/ProjectTabs/ProjectTabs";

const Projects: React.FC = () => {
  return (
    <div className="projects-body">
      <ProjectTabs></ProjectTabs>
    </div>
  );
};

export default Projects;

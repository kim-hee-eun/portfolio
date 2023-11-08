import "../CSS/Project.css";

import ProjectBox from "./ProjectBox";
import projectContents from "../Data/projectContents";
import { useState } from "react";

function Project() {
  let [showModal, setShowModal] = useState(false);
  return (
    <div id="project">
      <p id="click-message">Click to see more details!</p>
      <div id="project-boxes">
        {projectContents.map((item, index) => {
          return (
            <ProjectBox
              projectImage={item.projectImg}
              projectTitle={item.title}
              period={item.period}
              skill={item.skill}
              content={item.content}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Project;

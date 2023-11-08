import Modal from "./Modal";
import { useNavigate } from "react-router-dom";

function ProjectBox({
  projectImage,
  projectTitle,
  period,
  skill,
  content,
  showModal,
  setShowModal,
}) {
  const navigate = useNavigate();

  const onClickProject = () => {
    navigate(`/project/${projectTitle}`, {
      state: {
        projectImage: projectImage,
        period: period,
        skill: skill,
        content: content,
      },
    });
  };
  console.log(projectImage);
  return (
    <div
      className="project-box"
      style={{
        backgroundImage: `url(${projectImage})`,
      }}
      onMouseOver={() => setShowModal(true)}
      onClick={onClickProject}
    >
      <Modal showModal={showModal} projectTitle={projectTitle} />
    </div>
  );
}

export default ProjectBox;

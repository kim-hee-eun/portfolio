function Modal({ showModal, projectTitle }) {
  return showModal === true ? (
    <div className="modal">
      <p className="modal-title">{projectTitle}</p>
      <p className="click-button">Click</p>
    </div>
  ) : null;
}

export default Modal;

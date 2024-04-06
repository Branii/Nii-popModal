const NiiModal = (props) => {

  const closeModal = () => {
    props.closemodal();
  };

  return (
    <>
      <div className="overlay" onClick={closeModal}></div>
      <div className="modal">
        <div className="header"></div>
        <div className="content"></div>
        <div className="footer"></div>
      </div>
    </>
  );
};

export default NiiModal;

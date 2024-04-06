import Bounce from 'bounce.js';
import headerlogo from "./flat.png";
import { IoCloseCircleSharp } from "react-icons/io5";
import React, { useEffect } from "react";

const NiiModal = (props) => {


  useEffect(() => {
    if (props.modalstatus == 'show') {
      const bounce = new Bounce();
      bounce.scale({
        from: { x: 0.5, y: 0.5 },
        to: { x: 1, y: 1 },
      });
      bounce.applyTo(document.querySelectorAll(".modal"));
    }
  }, []);

  console.log(props)

  const closeModal = () => {
    props.closemodal();
  };

  return (
    <>
      <div className="overlay" onClick={closeModal}></div>
      <div className="cover" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="modal">
        <div className="header">
          <img src={headerlogo} className="headerlogo" alt="logo" />
        </div>
        <div className="icondiv">
          <span className="title">Confirm</span>
          <IoCloseCircleSharp className="icon" size={25} />
        </div>
        <div className="content">
          <div className="container">
            <div className="betdetails">
              <span>Bet Type: </span>
              <span>Single</span>
            </div>
            <div className="betdetails">
              <span>Booking Code: </span>
              <span>B3CRTMT </span>
            </div>
            <div className="table">
              <span>Game selections goes here</span>
            </div>
          </div>
        </div>
        <div className="footer">
          <button className="cancelbtn actionbtn" onClick={closeModal}>
            Cancel
          </button>
          <button className="confirmbtn actionbtn" onClick={closeModal}>
            Confirm
          </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default NiiModal;

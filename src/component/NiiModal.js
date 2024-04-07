import React, { useState, useEffect } from "react";
import Bounce from "bounce.js";
import BeatLoader from "react-spinners/BeatLoader";
import { FaDice } from "react-icons/fa6";
import { IoCloseCircleSharp } from "react-icons/io5";
import headerlogo from "../flat.png";

const NiiModal = (props) => {
  const { modalstatus, closemodal, toast } = props;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (modalstatus === "show") {
      const bounce = new Bounce();
      bounce.scale({
        from: { x: 0.5, y: 0.5 },
        to: { x: 1, y: 1 },
      });
      bounce.applyTo(document.querySelectorAll(".modal"));
    }
  }, [modalstatus]);

  const closeModal = () => {
    closemodal();
    setLoading(false);
  };

  const confirmBtnClicked = () => {
    setLoading(true);
    // Simulate an asynchronous action (e.g., API call) here
    setTimeout(() => {
      setLoading(false);
      toast(); // Trigger toast after action completion
      closemodal(); // Close modal after action completion
    }, 3000);
  };

  return (
    <>
      <div className="overlay" onClick={closeModal}></div>
      <div className="cover">
        <div className="modal">
          <div className="header">
            <img src={headerlogo} className="headerlogo" alt="logo" />
          </div>
          <div className="icondiv">
            <span className="title">Confirm</span>
            <IoCloseCircleSharp className="icon" onClick={closeModal} size={25} />
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
                <FaDice size={70} color="#ddd" />
              </div>
            </div>
          </div>
          <div className="footer">
            <button className="cancelbtn actionbtn" onClick={closeModal}>
              Cancel
            </button>
            <button className="confirmbtn actionbtn" onClick={confirmBtnClicked}>
              {loading ? <BeatLoader color="#ffc71f" /> : "Confirm"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NiiModal;
Nii-popModal

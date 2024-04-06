import Bounce from "bounce.js";
import headerlogo from "./flat.png";
import React, { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { FaDice } from "react-icons/fa6";
import { IoCloseCircleSharp } from "react-icons/io5";

const cssprops = {
  // add more properties if you wish kwame
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const NiiModal = (props) => {
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    if (props.modalstatus === "show") {
      const bounce = new Bounce();
      bounce.scale({
        from: { x: 0.5, y: 0.5 },
        to: { x: 1, y: 1 },
      });
      bounce.applyTo(document.querySelectorAll(".modal"));
    }
  }, []);

  const closeModal = () => {
    props.closemodal();
    setLoading(false);
  };

  const confirmBtnClicked = () => {
    setLoading(true);
    // Simulate an asynchronous action (e.g., API call) here
    setTimeout(() => {
      setLoading(false);
      props.toast(); // Trigger toast after action completion
      props.closemodal(); // Close modal after action completion
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
              <div className="table" >
                <FaDice size={70} color="#ddd"/>
              </div>
            </div>
          </div>
          <div className="footer">
            <button className="cancelbtn actionbtn" onClick={closeModal}>
              Cancel
            </button>
            <button
              className="confirmbtn actionbtn"
              onClick={confirmBtnClicked}
            >
              {loading === true ? <BeatLoader color="#ffc71f" /> : "Confirm"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NiiModal;

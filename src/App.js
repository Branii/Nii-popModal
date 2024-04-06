import "./App.css";
import NiiModal from "./NiiModal";
import { useState } from "react";

function App() {
  const [openmodal, setOpenModal] = useState("hide");

  const handleClick = (e) => {
    setOpenModal((holder) => {
      return holder == "show" ? "hide" : "show";
    });
  };

  const closeModal = () => {
    setOpenModal("hide");
  };

  return (
    <>
      <button onClick={handleClick}>Show Nii-Modal</button>
      {openmodal === 'show' ? <NiiModal closemodal={closeModal} modalstatus={openmodal} /> : null}
      {/* {<NiiModal closemodal={closeModal} modalstatus={openmodal}/>} */}
    </>
  );
}

export default App;

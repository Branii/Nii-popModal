import "./App.css";
import NiiModal from "./NiiModal";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [openmodal, setOpenModal] = useState("hide");

  const notify = () => toast.success('Bet submitted successfully', {
    style: {
      border: '1px solid #ffc61c',
      padding: '16px',
      color: '#713200',
    },
    iconTheme: {
      primary: '#ffd445',
      secondary: '#FFFAEE',
    },
  });

  const handleClick = (e) => {
    setOpenModal((holder) => {
      return holder === "show" ? "hide" : "show";
    });
  };

  const closeModal = () => {
    setOpenModal((holder) => {
      return holder === "show" ? "hide" : "show";
    });
  };

  return (
    <>
      <div>
        <Toaster position="bottom-center" />
      </div>
      <button onClick={handleClick}>Show Nii-Modal</button>
      {openmodal === "show" ? (
        <NiiModal closemodal={closeModal} modalstatus={openmodal} toast={notify} />
      ) : (
        <div>Custom React-Nii POPModal V1.0</div>
      )}
      {/* {<NiiModal closemodal={closeModal} modalstatus={openmodal}/>} */}
    </>
  );
}

export default App;

import "./App.css";
import NiiModal from "./component/NiiModal";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const notify = () => {
    toast.success('Bet submitted successfully.', {
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
  };

  const toggleModal = () => {
    setModalOpen((prevOpen) => !prevOpen);
  };

  return (
    <>
      <div>
        <Toaster position="bottom-center" />
      </div>
      <button onClick={toggleModal}>Show Nii-Modal</button>
      {modalOpen ? (
        <NiiModal closemodal={toggleModal} modalstatus="show" toast={notify} />
      ) : (
        <div>Custom React-Nii POPModal V1.0</div>
      )}
    </>
  );
}

export default App;

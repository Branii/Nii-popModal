
import './App.css';
import NiiModal from './NiiModal';
import { useState } from 'react';

function App() {

  const [openmodal, setOpenModal] = useState('hide')

  const handleClick = (e) => {
    setOpenModal((holder) => {
      return holder =='show' ? 'hide' :'show'
    });
  }

  const closeModal = () => {
    setOpenModal('hide');
  }

  return (
    <>
      <button onClick={handleClick}>Show NiiModal</button>
      {/* {openmodal === 'show' ? <NiiModal closemodal={closeModal}/> : null} */}
      {<NiiModal closemodal={closeModal}/>}
    </>
  );
}

export default App;

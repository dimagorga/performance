import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Directions from "./Components/Directions/Directions";
import info from "./data/directionsData";
import Modal from "./Components/Modal/Modal";

function App() {
  const [modal, setModal] = useState(false);

  const onModalOpen = () => {
    setModal(true);
  };

  const onModalClose = () => {
    setModal(false);
  };

  return (
    <div className="container">
      <Header />
      <Main>
        <Directions
          name="Творческие направления"
          data={info.artDirections}
          onBtnClick={onModalOpen}
        />
        <Directions
          onBtnClick={onModalOpen}
          name="Образовательные направления"
          data={info.edDirections}
        />
      </Main>
      {modal && <Modal close={onModalClose} />}
    </div>
  );
}

export default App;

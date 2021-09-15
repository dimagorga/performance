import { useState } from "react";
import Mail from "@material-ui/icons/MailOutlineRounded";
import MoneyOffRoundedIcon from "@material-ui/icons/MoneyOffRounded";
import FormatListNumberedRoundedIcon from "@material-ui/icons/FormatListNumberedRounded";
import LocationCityRoundedIcon from "@material-ui/icons/LocationCityRounded";
import SchoolIcon from "@material-ui/icons/School";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Directions from "./Components/Directions/Directions";
import info from "./data/directionsData";
import Modal from "./Components/Modal/Modal";
import Benefits from "./Components/Benefits/Benefits";
import BenefitsList from "./Components/BenefitsList/BenefitsList";

function App() {
  const [modal, setModal] = useState(false);
  const [infoSub, setInfoSub] = useState([]);

  const onModalOpen = () => {
    setModal(true);
  };

  const onModalClose = () => {
    setModal(false);
  };

  function handleFormSubmit(submitInfo) {
    if (submitInfo.trim === "") {
      setInfoSub([]);
    } else {
      setInfoSub([...submitInfo, infoSub]);
    }
  }

  return (
    <div className="container">
      <Header />
      <Main>
        <BenefitsList>
          <li>
            <Benefits
              name={"Опытные преподаватели"}
              descr={"Наш центр творчества находится в самом центре города."}
            >
              <SchoolIcon style={{ fontSize: 50 }} />
            </Benefits>
          </li>
          <li>
            <Benefits
              name={"Удобное расположение"}
              descr={"Наш центр творчества находится в самом центре города."}
            >
              <LocationCityRoundedIcon style={{ fontSize: 50 }} />
            </Benefits>
          </li>
          <li>
            <Benefits
              name={"Разнообразие направлений"}
              descr={"Ребёнок может выбрать то, что ему нравится."}
            >
              <FormatListNumberedRoundedIcon style={{ fontSize: 50 }} />
            </Benefits>
          </li>
          <li>
            <Benefits
              name={"Первое заняие бесплатно"}
              descr={"Попробовать все направления можно абсолютно бесплатно!"}
            >
              <MoneyOffRoundedIcon style={{ fontSize: 50 }} />
            </Benefits>
          </li>
        </BenefitsList>

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
      {modal && <Modal close={onModalClose} onSubmit={handleFormSubmit} />}
    </div>
  );
}

export default App;

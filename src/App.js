import { useState } from "react";
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
import Footer from "./Components/Footer/Footer";
import Team from "./Components/Team/Team";
import SectionTitle from "./Components/SectionTitle/SectionTitle";
import Price from "./Components/Price/Price";

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
      <Main onBtnClick={onModalOpen}>
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
        <SectionTitle id="directions" title="Творческие направления" />
        <Directions data={info.artDirections} onBtnClick={onModalOpen} />
        {/* <SectionTitle title="Образовательные направления" />
        <Directions onBtnClick={onModalOpen} data={info.edDirections} /> */}

        <Team>
          <SectionTitle title="Преподаватели" />
        </Team>

        <Price />
      </Main>
      <Footer />
      {modal && <Modal close={onModalClose} />}
    </div>
  );
}

export default App;

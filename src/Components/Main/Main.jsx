import s from "./Main.module.css";
import Button from "../Button/Button";

function Main({ children, onBtnClick }) {
  return (
    <main className={s.main}>
      <div className={s.mainTitle}>
        <p className={s.slogan}>ОТКРОЙ СЕБЯ С НОВОЙ СТОРОНЫ!</p>
        <Button
          handleClick={onBtnClick}
          buttonName={"Записаться на пробное занятие"}
        />
      </div>
      {children}
    </main>
  );
}

export default Main;

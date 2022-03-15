import { createPortal } from "react-dom";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import InputMask from "react-input-mask";
import { BallTriangle } from "react-loader-spinner";
import s from "./Modal.module.css";
import Button from "../Button/Button";

const modalRoot = document.querySelector("#modal-root");

function Modal({ close }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [select, setSelect] = useState("Не можем определиться");
  const [sendSuccess, setSendSuccess] = useState(false);
  const [loader, setLoader] = useState(false);
  const [variables] = useState([
    {
      id: 0,
      name: "Выбрать направление",
      disabled: true,
      selected: true,
      hidden: true,
    },
    { id: 1, name: "Хореография" },
    { id: 2, name: "ИЗО" },
    { id: 3, name: "Вокал" },
    { id: 4, name: "Актёрское мастерство" },
    { id: 5, name: "Английский язык" },
    { id: 6, name: "Подготовка к школе" },
  ]);
  const form = useRef();
  useEffect(() => {
    window.addEventListener("keydown", handleCloseModal);
    return () => window.removeEventListener("keydown", handleCloseModal);
  });

  const handleCloseModal = (e) => {
    if (e.key === "Escape" || e.target === e.currentTarget) {
      close();
    }
  };

  const selectOption = (e) => {
    return setSelect(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const sendEmail = (e) => {
    e.preventDefault();
    setLoader(true);
    emailjs
      .sendForm(
        "performance_brest",
        "template_bsmyxib",
        form.current,
        "user_B8S5k7Vkaf6wBLV9wi53c"
      )
      .then(
        (result) => {
          setSendSuccess(true);
          setLoader(false);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return createPortal(
    <div className={s.backdrop} onClick={handleCloseModal}>
      {!loader ? (
        <div className={s.wrapper}>
          {!sendSuccess && (
            <h2 className={s.title}>Запись на пробное занятие </h2>
          )}
          {!sendSuccess ? (
            <form ref={form} className={s.form} onSubmit={sendEmail}>
              <label className={s.label}>
                <input
                  placeholder="ФИО"
                  className={s.tinput}
                  type="text"
                  onChange={handleChange}
                  label={"ФИО"}
                  name="name"
                  value={name}
                  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                  required
                />
              </label>

              <label className={s.label}>
                <InputMask
                  required
                  placeholder="Номер телефона"
                  mask="+375 (99) 9999999"
                  className={s.tinput}
                  onChange={handleChange}
                  value={number}
                  name="number"
                />
              </label>

              <label>
                <select
                  required
                  className={s.select}
                  value={select}
                  onChange={selectOption}
                  name="select"
                >
                  {variables.map((o) => (
                    <option
                      key={o.name}
                      className={s.selectOption}
                      value={o.name}
                      defaultValue={o.selected}
                      hidden={o.hidden}
                    >
                      {o.name}
                    </option>
                  ))}
                </select>
              </label>

              <Button
                className={s.modalBtn}
                type="submit"
                buttonName="Оставить заявку"
              />
            </form>
          ) : (
            <p className={s.thanksMsg}>
              Спасибо! Наш администратор скоро свяжется с Вами.
            </p>
          )}
        </div>
      ) : (
        <BallTriangle color="rgb(255, 217, 0)" height={80} width={80} />
      )}
    </div>,
    modalRoot
  );
}

export default Modal;

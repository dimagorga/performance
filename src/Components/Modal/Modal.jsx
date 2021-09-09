import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import s from "./Modal.module.css";
import Button from "../Button/Button";
import ModalInput from "../ModalInput/ModalInput";
import ModalSelect from "../ModalSelect/ModalSelect";

const modalRoot = document.querySelector("#modal-root");

function Modal({ close, onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [variables, setVariables] = useState([]);

  useEffect(() => {
    window.addEventListener("keydown", handleCloseModal);
    return () => window.removeEventListener("keydown", handleCloseModal);
  });

  const handleCloseModal = (e) => {
    if (e.key === "Escape" || e.target === e.currentTarget) {
      close();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || number.trim() === "") {
      alert("Низзя");
    }
    onSubmit([name, number, ...variables]);
    console.log(variables);
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
      case "variables":
        setVariables(value);
        break;
      default:
        return;
    }
  };

  return createPortal(
    <div className={s.backdrop}>
      <div className={s.wrapper}>
        <h3 className={s.title}>Запись на пробное занятие </h3>
        <form className={s.form} onSubmit={handleSubmit}>
          <ModalInput
            className={s.input}
            size="small"
            type="text"
            onChange={handleChange}
            label={"ФИО"}
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />

          <ModalInput
            className={s.input}
            size="small"
            type="tel"
            onChange={handleChange}
            label={"Номер телефона"}
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />

          <ModalSelect
            className={s.select}
            name="variables"
            value={variables}
            onChange={handleChange}
          />

          <Button
            className={s.modalBtn}
            type="submit"
            buttonName="Оставить заявку"
          />
        </form>
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;

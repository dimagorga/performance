import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import s from "./Modal.module.css";
import Button from "../Button/Button";

const modalRoot = document.querySelector("#modal-root");

function Modal({ close, children }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    window.addEventListener("keydown", handleCloseModal);
    return () => window.removeEventListener("keydown", handleCloseModal);
  });

  const handleCloseModal = (e) => {
    if (e.key === "Escape" || e.target === e.currentTarget) {
      close();
    }
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
      case "email":
        setEmail(value);
        break;
      default:
        return;
    }
  };

  return createPortal(
    <div className={s.backdrop}>
      <form className={s.form} onSubmit>
        <label htmlFor={1}>
          ФИО
          <input
            className={s.input}
            type="text"
            onChange={handleChange}
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label htmlFor={2}>
          Номер телефона
          <input
            className={s.input}
            type="tel"
            onChange={handleChange}
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <label htmlFor={3}>
          Email
          <input
            className={s.input}
            type="email"
            onChange={handleChange}
            name="email"
            value={email}
            required
          />
        </label>
        <label htmlFor={4}>
          Направление
          <select>
            <option>Хореография</option>
            <option>Вокал</option>
            <option>Актёрское мастерство</option>
            <option>ИЗО</option>
            <option>Английский язык</option>
            <option>Занятия для дошкольников</option>
          </select>
        </label>

        <Button type="submit" buttonName="Оставить заявку" />
      </form>
    </div>,
    modalRoot
  );
}

export default Modal;

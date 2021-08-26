import s from "./Button.module.css";
function Button({ buttonName, handleClick }) {
  return (
    <button onClick={handleClick} className={s.button}>
      {buttonName}
    </button>
  );
}

export default Button;

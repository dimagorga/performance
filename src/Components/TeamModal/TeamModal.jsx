import { createPortal } from "react-dom";
import s from "./TeamModal.module.css";
import { useEffect } from "react";
import team from "../../data/team";
import Button from "../Button/Button";
import Close from "@material-ui/icons/Close";

const modalRoot = document.querySelector("#teamModal-root");

function TeamModal({ close, memberId, onBtnClick }) {
  useEffect(() => {
    window.addEventListener("keydown", handleCloseModal);
    return () => window.removeEventListener("keydown", handleCloseModal);
  });

  const handleCloseModal = (e) => {
    if (e.key === "Escape" || e.target === e.currentTarget) {
      close();
    }
  };

  return createPortal(
    <div className={s.backdrop} onClick={handleCloseModal}>
      <div className={s.wrapper}>
        <button className={s.closeBtn} onClick={close}>
          <Close className={s.closeBtnIcon} />
        </button>
        {team.map((member) => {
          return (
            member.id === memberId && (
              <div className={s.card} key={memberId}>
                <div className={s.cardInfo}>
                  <img src={member.url} alt={member.name} className={s.image} />
                </div>
                <div className={s.cardInfo}>
                  <h4 className={s.title}>{member.name}</h4>
                  <p className={s.position}>{member.position}</p>
                  <p className={s.descr}>{member.descr}</p>
                  <Button
                    buttonName={"Записаться"}
                    handleClick={() => {
                      close();
                      onBtnClick();
                    }}
                  />
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>,
    modalRoot
  );
}

export default TeamModal;

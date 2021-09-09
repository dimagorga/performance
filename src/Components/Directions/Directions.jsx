import Info from "@material-ui/icons/Info";
import s from "./Directions.module.css";
import Button from "../Button/Button";

function Directions({ data, name, onBtnClick }) {
  return (
    <div className={s.wrapper}>
      <h2 className={s.mainTitle}>{name}</h2>
      <ul className={s.list}>
        {data.map((dir) => (
          <li className={s.item} key={dir.id}>
            <h2 className={s.title}>{dir.name}</h2>
            <Info className={s.icon} />
            <img className={s.image} src={dir.url} alt={dir.name} />
            <div className={s.overlay}>
              <p className={s.description}>{dir.descr}</p>
            </div>
            <Button buttonName={"Записаться"} handleClick={onBtnClick} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Directions;

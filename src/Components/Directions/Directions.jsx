import Info from "@material-ui/icons/Info";
import s from "./Directions.module.css";
import Button from "../Button/Button";

function Directions({ data, name, onBtnClick, onDirClick }) {
  return (
    <div className={s.wrapper} id="directions">
      <ul className={s.list}>
        {data.map((dir) => (
          <li className={s.item} key={dir.id} id={dir.id} onClick={onDirClick}>
            {/* <Info className={s.icon} /> */}
            <div className={s.cardInfo}>
              {dir.id % 2 === 0 && (
                <img className={s.image} src={dir.url} alt={dir.name} />
              )}
              <div className={s.overlay}>
                <h2 className={s.title}>{dir.name}</h2>
                <p className={s.description}>{dir.descr}</p>
                <Button buttonName={"Записаться"} handleClick={onBtnClick} />
              </div>
              {dir.id % 2 !== 0 && (
                <img className={s.image} src={dir.url} alt={dir.name} />
              )}
            </div>
          </li>
        ))}
      </ul>
      <ul className={s.mobileList}>
        {data.map((dir) => (
          <li
            className={s.mobileItem}
            key={dir.id}
            id={dir.id}
            onClick={onDirClick}
          >
            {/* <Info className={s.icon} /> */}
            <div className={s.mobileCardInfo}>
              <img className={s.mobileImage} src={dir.url} alt={dir.name} />
              <div className={s.mobileOverlay}>
                <h2 className={s.mobileTitle}>{dir.name}</h2>
                <p className={s.mobileDescription}>{dir.descr}</p>
                <Button buttonName={"Записаться"} handleClick={onBtnClick} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Directions;

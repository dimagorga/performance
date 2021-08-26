import s from "./Directions.module.css";
import Button from "../Button/Button";

function Directions({ dataArt, dataEd }) {
  return (
    <div className={s.wrapper}>
      <h2 className={s.mainTitle}>Творческие направления</h2>
      <ul className={s.list}>
        {dataArt.map((dir) => (
          <li className={s.item} key={dir.id}>
            <h2 className={s.title}>{dir.name}</h2>
            <img className={s.image} src={dir.url} alt={dir.name} />
            {/* <p className={s.description}>{dir.descr}</p> */}
            <Button buttonName={"Записаться"} />
          </li>
        ))}
      </ul>
      <h2 className={s.mainTitle}>Образовательные направления</h2>
      <ul className={s.list}>
        {dataEd.map((dir) => (
          <li className={s.item} key={dir.id}>
            <h2 className={s.title}>{dir.name}</h2>
            <img className={s.image} src={dir.url} alt={dir.name} />
            {/* <p className={s.description}>{dir.descr}</p> */}
            <Button buttonName={"Записаться"} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Directions;

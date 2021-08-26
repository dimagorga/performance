import s from "./Directions.module.css";

function Directions({ data }) {
  return (
    <ul className={s.list}>
      {data.map((dir) => (
        <li className={s.item} key={dir.id}>
          <h2 className={s.title}>{dir.name}</h2>
          <img className={s.image} src={dir.url} alt={dir.name} />
          {/* <p className={s.description}>{dir.descr}</p> */}
          <button>Записаться</button>
        </li>
      ))}
    </ul>
  );
}

export default Directions;

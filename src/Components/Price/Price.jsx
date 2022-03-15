import price from "../../data/priceList";
import s from "./Price.module.css";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function Price() {
  return (
    <div className={s.wraper} id="price">
      <SectionTitle title="Стоимость абонементов" />

      <ul className={s.list}>
        {price.map((el) => {
          return (
            <li key={el.id} className={s.item}>
              <h4 className={s.title}>{el.name}</h4>
              <p className={s.description}>{el.descr}</p>
            </li>
          );
        })}
      </ul>
      <p className={s.note}>
        * Творческие и образовательные направления считаются отдельно.
      </p>
    </div>
  );
}

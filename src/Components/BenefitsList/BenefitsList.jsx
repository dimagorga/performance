import s from "./BenefitsList.module.css";

export default function BenefitsList({ children }) {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Наши преимущества</h2>
      <ul className={s.list}>{children}</ul>
    </div>
  );
}

import s from "./Benefits.module.css";
export default function Benefits({ children, name, descr }) {
  return (
    <div className={s.wrapper}>
      {children}
      <p className={s.name}>{name}</p>
      <p className={s.descr}>{descr}</p>
    </div>
  );
}

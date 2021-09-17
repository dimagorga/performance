import s from "./SectionTitle.module.css";

export default function SectionTitle({ title }) {
  return <h2 className={s.sectionTitle}>{title}</h2>;
}

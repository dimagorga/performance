import s from "./Navigation.module.css";
function Navigation() {
  return (
    <nav className={s.nav}>
      <ul className={s.menuList}>
        <li className={s.menuItem}>
          <a className={s.navLink} href="/">
            Направления
          </a>
        </li>
        <li className={s.menuItem}>
          <a className={s.navLink} href="/">
            Преподаватели
          </a>
        </li>
        <li className={s.menuItem}>
          <a className={s.navLink} href="/">
            Галерея
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;

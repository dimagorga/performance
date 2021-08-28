import Call from "@material-ui/icons/Call";
import Mail from "@material-ui/icons/Mail";
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
        {/* <li className={s.menuItem}>
          <a className={s.navLink} href="/">
            Галерея
          </a>
        </li> */}
        <ul className={s.contacts}>
          <li className={s.contactsListItem}>
            <a className={s.contactsListLink} href="tel:+375339044424">
              <Call fontSize="inherit" className={s.callIcon} />
              +375 33 904 44 24
            </a>
          </li>
          <li className={s.contactsListItem}>
            <a
              className={s.contactsListLink}
              href="mailto:performance_brest@gmail.com"
            >
              <Mail fontSize="inherit" className={s.callIcon} />
              performance_brest
            </a>
          </li>
        </ul>
      </ul>
    </nav>
  );
}
export default Navigation;

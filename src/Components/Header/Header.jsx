import { Component } from "react";
import Call from "@material-ui/icons/Call";
import Mail from "@material-ui/icons/Mail";
import Menu from "@material-ui/icons/Menu";
import Navigation from "../Navigation/Navigation";
import s from "./Header.module.css";

class Header extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    return (
      <header className={s.header}>
        <a className={s.logo} href="/">
          Performance
        </a>
        <p className={s.logoDescr}>Центр творчества</p>
        <div className={s.mobileMenu}>
          <button className={s.burger} onClick={this.toggle}>
            <Menu className={s.burgerIcon} />
          </button>
          {this.state.visible && (
            <div className={s.mobileNav}>
              <ul>
                <li className={s.mobileListItem}>
                  <a className={s.mobileListLink} href="/">
                    Направления
                  </a>
                </li>
                <li className={s.mobileListItem}>
                  <a className={s.mobileListLink} href="/">
                    Преподаватели
                  </a>
                </li>
                <li className={s.mobileListItem}>
                  <a className={s.mobileListLink} href="/">
                    Галерея
                  </a>
                </li>
                <ul className={s.contactList}>
                  Контакты:
                  <li className={s.mobileListLink}>
                    <a className={s.mobileListLink} href="tel:+375339044424">
                      <Call fontSize="inherit" className={s.callIcon} />
                      +375 33 904 44 24
                    </a>
                  </li>
                  <li className={s.mobileListLink}>
                    <a
                      className={s.mobileListLink}
                      href="mailto:performance_brest@gmail.com"
                    >
                      <Mail fontSize="inherit" className={s.callIcon} />
                      performance_brest@gmail.com
                    </a>
                  </li>
                </ul>
              </ul>
            </div>
          )}
        </div>
        <Navigation />
      </header>
    );
  }
}
export default Header;

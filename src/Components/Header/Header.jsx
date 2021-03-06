import { Component } from "react";
import Call from "@material-ui/icons/Call";
import Mail from "@material-ui/icons/Mail";
import Menu from "@material-ui/icons/Menu";
import Close from "@material-ui/icons/Close";

import Navigation from "../Navigation/Navigation";
import AnchorLink from "react-anchor-link-smooth-scroll";
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
        <div className={s.wrapper}>
          <a className={s.logo} href="/">
            Performance
          </a>
          <p className={s.logoDescr}>Центр творчества</p>
          <div className={s.mobileMenu}>
            <button className={s.burger} onClick={this.toggle}>
              {this.state.visible ? (
                <Close className={s.burgerIcon} />
              ) : (
                <Menu className={s.burgerIcon} />
              )}
            </button>
            {this.state.visible && (
              <div className={s.mobileNav}>
                <ul>
                  <li className={s.mobileListItem}>
                    <AnchorLink
                      offset="110"
                      className={s.mobileListLink}
                      href="#directions"
                      onClick={this.toggle}
                    >
                      Направления
                    </AnchorLink>
                  </li>
                  <li className={s.mobileListItem}>
                    <AnchorLink
                      offset="60"
                      className={s.mobileListLink}
                      href="#team"
                      onClick={this.toggle}
                    >
                      Преподаватели
                    </AnchorLink>
                  </li>
                  <li className={s.mobileListItem}>
                    <AnchorLink
                      offset="60"
                      className={s.mobileListLink}
                      href="#price"
                      onClick={this.toggle}
                    >
                      Стоимость
                    </AnchorLink>
                  </li>
                  <li className={s.mobileListItem}>
                    <p
                      onClick={this.props.onBtnClick}
                      className={s.mobileListLink}
                      href="#directions"
                    >
                      Запись на пробное занятие
                    </p>
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
                        href="mailto:performance.brest@gmail.com"
                      >
                        <Mail fontSize="inherit" className={s.callIcon} />
                        performance.brest@gmail.com
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
            )}
          </div>
          <Navigation />
        </div>
      </header>
    );
  }
}
export default Header;

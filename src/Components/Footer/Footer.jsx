import Call from "@material-ui/icons/Call";
import Mail from "@material-ui/icons/Mail";
import LocationCity from "@material-ui/icons/LocationCity";
import InstagramIcon from "@material-ui/icons/Instagram";
import { ReactComponent as VkLogo } from "../../image/vk.svg";
import s from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={s.wrapper}>
      <div className={s.contacts}>
        <div>
          <h3 className={s.title}>Контакты</h3>
          <ul className={s.list}>
            <li className={s.item}>
              <a
                className={s.mobileListLink}
                target="_blank"
                href="https://goo.gl/maps/FPpDdrh7ssjH2by97"
                rel="noreferrer"
              >
                <LocationCity fontSize="inherit" className={s.callIcon} />
                г. Брест, ул. Гоголя 65, 3 этаж, 316 каб.
              </a>
            </li>
            <li className={s.item}>
              <a className={s.mobileListLink} href="tel:+375339044424">
                <Call fontSize="inherit" className={s.callIcon} />
                +375 33 904 44 24
              </a>
            </li>

            <li className={s.item}>
              <a
                className={s.mobileListLink}
                href="mailto:performance_brest@gmail.com"
              >
                <Mail fontSize="inherit" className={s.callIcon} />
                performance_brest@gmail.com
              </a>
            </li>
          </ul>
        </div>
        {/* <div className={s.footerButton}>
          <h3 className={s.title}>Открой себя с новой стороны!</h3>
          <Button buttonName={"Записаться прямо сейчас"} />
        </div> */}
        <div>
          <h3 className={s.title}>Присоединяйтесь</h3>
          <ul className={s.logoList}>
            <li className={s.itemLogo}>
              <a
                className={s.mobileLogo}
                target="_blank"
                href="https://www.instagram.com/performance_brest/"
                rel="noreferrer"
              >
                <InstagramIcon fontSize="inherit" />
              </a>
            </li>
            <li className={s.itemLogo}>
              <a
                className={s.mobileLogoVk}
                target="_blank"
                href="https://vk.com/performance_brest"
                rel="noreferrer"
              >
                <VkLogo />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

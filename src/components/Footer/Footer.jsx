import React from 'react';
import s from './Footer.module.css';
import Logo from '../../components/Header/Logo.png';
import { Link } from "react-router-dom";
import ScrollToTop from '../ScrollToTop';


const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footerLogo}>
        <img src={Logo} alt='Логотип' />
      </div>

    <div className={s.footerMenu}>
        <div className={s.menuLinks}>
          <h4>Информация</h4>
          <ScrollToTop />
            <Link to="/PhotoSession">Главная</Link>
            <Link to="/AboutUs">О нас</Link>
            <Link to="/Services">Наши услуги</Link>
            <Link to="/Portfolio">Портфолио</Link>
        </div>

        <div className={s.menuContact}>
          <h4>Контакты</h4>
          <p>Тел: +7 923 225 51 50</p>
          <p>e-mail: focus.studio@gmail.com</p>
        </div>
      </div>

      <div className={s.footerSocial}>
        <a href="https://t.me/Caxar04ek"><img src={`${process.env.PUBLIC_URL}/img/TG.svg`}  alt="1" className={s.socialIcon} /></a>
        <a href="https://wa.me/+79232255150"><img src={`${process.env.PUBLIC_URL}/img/WA.svg`} alt="2"  className={s.socialIcon} /></a>
      </div>
    </footer>
  );
};

export default Footer;
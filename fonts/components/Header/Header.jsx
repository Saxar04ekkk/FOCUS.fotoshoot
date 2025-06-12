import React from "react";
import Logo from './Logo.png';
import s from './Header.module.css'

const Header = () => {
    return <header className={s.header}>
        <img src={Logo} alt='Логотип' />
        <div className={s.nav}>
            <a href='#home'>Главная</a>
            <a href='#about'>О нас</a>
            <a href='#servic'>Наши услуги</a>
            <a href='#portfolio'>Портфолио</a>
        </div>
    </header>
}
export default Header;
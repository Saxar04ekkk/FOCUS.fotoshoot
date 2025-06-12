import React, { useState } from "react";
import Logo from './Logo.png';
import s from './Header.module.css';
import { Link } from "react-router-dom";
import HamburgerIcon from './burger.svg';
import CloseIcon from './burger.svg';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={s.header}>
            <img src={Logo} alt='Логотип' />

            <div className={s.hamburger} onClick={toggleMenu}>
                <img src={isMenuOpen ? CloseIcon : HamburgerIcon} alt="Меню" />
            </div>

            <div className={`${s.nav} ${isMenuOpen ? s.open : ''}`}>
                <div className={s.closeButton} onClick={toggleMenu}>
                    <img src={CloseIcon} alt="Закрыть" />
                </div>

                <Link to="/PhotoSession" onClick={toggleMenu}>Главная</Link>
                <Link to="/AboutUs" onClick={toggleMenu}>О нас</Link>
                <Link to="/Services" onClick={toggleMenu}>Наши услуги</Link>
                <Link to="/Portfolio" onClick={toggleMenu}>Портфолио</Link>
            </div>
        </header>
    );
};

export default Header;

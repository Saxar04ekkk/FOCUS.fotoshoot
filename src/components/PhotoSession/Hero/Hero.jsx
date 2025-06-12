import React from "react";
import s from './Hero.module.css'
import Button from "../../Button/Button";
import { useNavigate } from 'react-router-dom';


const Hero = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/contact');
    };

    return (
        <div className={s.container}>
            <img src={`${process.env.PUBLIC_URL}/img/Girl.svg`} alt="" />
            <div className={s.text}>
                <h1>Лови моменты с профессиональной фотосессией</h1>
                <p>Подарите себе яркие и живые фотографии для памяти и вдохновения!</p>
                <Button className={s.btn} text="Записаться на фотосессию" onClick={handleClick} />
            </div>
        </div>
    );
};

export default Hero;
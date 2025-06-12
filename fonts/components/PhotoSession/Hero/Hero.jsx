import React from "react";
import girlImg from '../img/Girl.svg';
import s from './Hero.module.css'


const Hero = () => {
    return (
        <div className={s.container}>
            <img src={girlImg} alt='фото' />
            <div className={s.text}>
                <h1>Лови моменты с профессиональной фотосессией</h1>
                <p>Подарите себе яркие и живые фотографии для памяти и вдохновения!</p>
                <button className={s.btn}>Записаться на фотосессию</button>
            </div>
        </div>
    )
}
export default Hero;
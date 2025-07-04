import React from 'react';
import s from './GallerySection.module.css';
import Button from '../../Button/Button';
import { useNavigate } from 'react-router-dom';

const GallerySection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Portfolio');
  };
  return (
    <section className={s.gallery}>
      <h2 className={s.title}>Наши работы</h2>
      <p className={s.subtitle}>Здесь представлены лучшие работы.</p>
      <div className={s.grid}>
        <img src={`${process.env.PUBLIC_URL}/img/portrait1.svg`} alt="Пример работы 1" className={s.img1} />
        <img src={`${process.env.PUBLIC_URL}/img/image5.svg`} alt="Пример работы 2" className={s.img2} />
        <img src={`${process.env.PUBLIC_URL}/img/image6.svg`} alt="Пример работы 3" className={s.img3} />
        <img src={`${process.env.PUBLIC_URL}/img/image7.svg`} alt="Пример работы 4" className={s.img4} />тт


        <div className={s.buttonWrapper}>
          <Button className={s.btn} text="Больше работ" onClick={handleClick} />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
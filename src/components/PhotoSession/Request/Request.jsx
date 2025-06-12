import React from 'react';
import s from './Request.module.css';
import Button from '../../Button/Button';
import { useNavigate } from 'react-router-dom';

const Request = ({ text, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>
        Понравились наши фотосессии?
      </h2>
      <p className={s.subtitle}>
        Хотите окунуться в мир вдохновения и получить профессиональные фото? <br />Оставьте заявку — и мы свяжемся с вами, чтобы обсудить все идеи и детали вашей уникальной фотосессии.
      </p>
      <Button className={s.btn} text="Оставить заявку" onClick={handleClick} />
    </div>
  );
};

export default Request;
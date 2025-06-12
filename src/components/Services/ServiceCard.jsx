import React from 'react';
import s from './ServiceCard.module.css';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ title, desc, price }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };

  return (
    <div className={s.card}>
      <div className={s.content}>
        <h3 className={s.title}>{title}</h3>
        <p className={s.desc}>{desc}</p>
        <div className={s.bottom}>
          <Button className={s.btn} text="Заказать" onClick={handleClick} />
          <span className={s.price}>{price}</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

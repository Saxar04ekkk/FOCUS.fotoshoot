import React from 'react';
import s from './FeatureItem.module.css';

const FeatureItem = ({ icon, title }) => {
  return (
    <div className={s.featureItem}>
      <img src={icon} alt="иконка" className={s.featureIcon} />
      <p className={s.featureTitle}>{title}</p>
    </div>
  );
};

export default FeatureItem;

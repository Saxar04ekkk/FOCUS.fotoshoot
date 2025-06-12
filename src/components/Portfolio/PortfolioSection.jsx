import React from 'react';
import PhotoGrid from './PhotoGrid';
import s from './Portfolio.module.css';

const PortfolioSection = ({ title, photos }) => {
  return (
    <section className={s.section}>
      <h2 className={s.sectionTitle}>{title}</h2>
      <PhotoGrid title={title} photos={photos} />
      <div className={s.line}></div>
    </section>
  );
};

export default PortfolioSection;
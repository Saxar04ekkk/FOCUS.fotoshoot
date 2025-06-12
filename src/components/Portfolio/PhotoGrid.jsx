import React from 'react';
import s from './PhotoGrid.module.css';

const PhotoGrid = ({ photos, title }) => {
  if (photos.length < 4) return null;

  return (
    <div className={s.grid}>
      <img src={photos[0]} alt={`${title} фото 1`} className={`${s.photo} ${s.photo1}`} />
      <img src={photos[1]} alt={`${title} фото 2`} className={`${s.photo} ${s.photo2}`} />
      <img src={photos[2]} alt={`${title} фото 3`} className={`${s.photo} ${s.photo3}`} />
      <img src={photos[3]} alt={`${title} фото 4`} className={`${s.photo} ${s.photo4}`} />
    </div>
  );
};

export default PhotoGrid;

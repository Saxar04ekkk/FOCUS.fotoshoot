import React from 'react';
import s from './StepColumn.module.css';


const StepColumn = ({ stepNumber, title, description, side }) => {
  return (
    <div className={`${s.stepContainer} ${s[side]}`}>
      {side === 'left' && (
        <>
          <div className={s.content}>
            <h2 className={s.title}>{title}</h2>
            <ul className={s.list}>
              {description.map((item, index) => (
                <li key={index} className={s.item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={s.circle}>{stepNumber}</div>
          <div className={s.empty}></div>
        </>
      )}

      {side === 'right' && (
        <>
          <div className={s.empty}></div>
          <div className={s.circle}>{stepNumber}</div>
          <div className={s.content}>
            <h2 className={s.title}>{title}</h2>
            <ul className={s.list}>
              {description.map((item, index) => (
                <li key={index} className={s.item}>{item}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default StepColumn;

import React from "react";
import s from "./Step.module.css";
import clsx from 'clsx';

export default function Step({ number, title, details, side }) {
  return (
    <div className={clsx(s.step, s[side])}>
      {side === 'left' && (
        <div className={s.text}>
          <h2 className={s.title}>{title}</h2>
          <ul className={s.list}>
            {details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      )}
      <div className={s.circleWrapper}>
        <div className={s.circle}>{number}</div>
      </div>
      {side === 'right' && (
        <div className={s.text}>
          <h2 className={s.title}>{title}</h2>
          <ul className={s.list}>
            {details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
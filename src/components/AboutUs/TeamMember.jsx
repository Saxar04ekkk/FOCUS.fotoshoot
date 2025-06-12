import React from 'react';
import s from './TeamMember.module.css';

const TeamMember = ({ name, desc, img }) => {
  return (
    <div className={s.member}>
      <img src={img} alt={name} className={s.img} />
      <h3 className={s.name}>{name}</h3>
      <p className={s.desc}>{desc}</p>
    </div>
  );
};

export default TeamMember;

import React from 'react';
import s from './AboutUs.module.css';
import TeamMember from './TeamMember';
import '../../Fonts.module.css'




const team = [
  {
    name: 'Анна Кузнецова',
    desc: 'Специализируется на студийных и outdoor съёмках, умеет создавать атмосферу доверия и раскрывать естественность моделей.',
    img: `${process.env.PUBLIC_URL}/img/anna.svg`

  },
  {
    name: 'Юлия Белякова',
    desc: 'Эксперт в семейной и детской фотосъёмке. Отличается вниманием к деталям и умением поймать искренние эмоции.',
    img: `${process.env.PUBLIC_URL}/img/yulia.svg`
  },
  {
    name: 'Марина Соловьева',
    desc: 'Специалист по love story и романтическим съёмкам. Создаёт нежные и эмоциональные фотографии, умеет подать чувства через кадр.',
    img: `${process.env.PUBLIC_URL}/img/marina.svg`
  },
  {
    name: 'Дмитрий Иванов',
    desc: 'Фотограф с креативным взглядом, ведущий выездные съёмки с использованием современных техник и нестандартных ракурсов.',
    img: `${process.env.PUBLIC_URL}/img/dmitry.svg`
  },
  {
    name: 'Игорь Петров',
    desc: 'Профессионал в портретной съёмке, создаёт естественные, выразительные образы, подчёркивая индивидуальность модели.',
    img: `${process.env.PUBLIC_URL}/img/igor.svg`
  }
];

const AboutUs = () => {
  return (
      <section className={s.about}>
        <h1 className={s.title}>О НАС</h1>
        <p className={s.text}>
          Мы — команда опытных профессионалов с более чем 5-летним стажем в сфере фотосъёмки. Наша миссия — помочь вам сохранить самые ценные моменты жизни в ярких и живых фотографиях. Мы ценим индивидуальный подход к каждому клиенту и создаём не просто снимки, а настоящие истории, отражающие эмоции и характер.
        </p>
        <p className={s.text}>
          Доверяя нам свои воспоминания, вы получаете качество, комфорт и профессионализм на каждом этапе — от первой консультации до готовых фотографий.
        </p>

        <div className={s.team}>
          {team.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </section>
  );
};

export default AboutUs;

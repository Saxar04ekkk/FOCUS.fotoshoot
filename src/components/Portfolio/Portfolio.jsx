import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PortfolioSection from './PortfolioSection';
import Button from '../Button/Button';
import s from './Portfolio.module.css';

const Portfolio = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = () => {
    navigate('/contact');
  };

    const sections = [
        {
            title: 'Индивидуальные портреты',
            photos: ['/img/portrait1.svg', '/img/portrait2.svg', '/img/portrait3.svg', '/img/portrait4.svg'],
        },
        {
            title: 'Семейные фотосессии',
            photos: ['/img/family1.svg', '/img/family2.svg', '/img/family3.svg', '/img/family4.svg'],
        },
        {
            title: 'Love story',
            photos: ['/img/love1.svg', '/img/love2.svg', '/img/love3.svg', '/img/love4.svg'],
        },
        {
            title: 'Детские фотосессии',
            photos: ['/img/child1.svg', '/img/child2.svg', '/img/child3.svg', '/img/child4.svg'],
        },
        {
            title: 'Выездные съёмки',
            photos: ['/img/outdoor1.svg', '/img/outdoor2.svg', '/img/outdoor3.svg', '/img/outdoor4.svg'],
        },
    ];

    return (
        <div className={s.portfolio}>
            <h1 className={s.title}>Портфолио</h1>
            <p className={s.description}>
                Добро пожаловать в наше портфолио — коллекцию лучших работ, которые отражают стиль, качество и профессионализм нашей фотостудии.
            </p>
            <p className={s.description}>
                Мы внимательно подходим к каждой съемке, создавая живые и естественные кадры, которые передают эмоции и уникальные моменты вашей жизни. Просматривая портфолио, вы сможете оценить качество обработки, композицию и творческий подход к работе.
            </p>
            <div className={s.separator} />
            {sections.map((section, idx) => (
                <PortfolioSection key={idx} title={section.title} photos={section.photos} />
            ))}

            <div className={s.ctaContainer}>
                <p className={s.ctaText}>
                    Если вам понравились наши работы, мы с радостью поможем воплотить вашу идею в жизнь и создадим фотографии, которые будут радовать вас!
                </p>
                <Button className={s.btn} text="Записаться на фотосессию"  onClick={handleClick} />
            </div>
        </div>
    );
};

export default Portfolio;

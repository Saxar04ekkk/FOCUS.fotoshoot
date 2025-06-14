import React from 'react';
import s from './Services.module.css';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'Индивидуальная \nфотосессия',
    desc: 'Идеально подходит для портретов, съёмок для личного бренда или профессиональных фото. В стоимость входит 1 час съёмки и базовая обработка фотографий.',
    price: 'От 4000 ₽'
  },
  {
    title: 'Семейная \nфотосессия',
    desc: 'Создайте тёплые и искренние снимки всей семьи. Оптимальный вариант для групповых и совместных портретов с комфортным временем съёмки и обработкой.',
    price: 'От 6000 ₽'
  },
  {
    title: 'Love story',
    desc: 'Романтичные фотографии для влюблённых пар, чтобы подчеркнуть ваши чувства и атмосферу отношений. Включает в себя 1 час съёмки и профессиональную ретушь.',
    price: 'От 5000 ₽'
  },
  {
    title: 'Выездная \nфотосессия',
    desc: 'Проводится в профессиональной студии с контролем света, фонами и реквизитом, либо на природе или в городе. Подходит для классических и творческих съёмок.',
    price: 'От 5500 ₽'
  },
  {
    title: 'Детская \nфотосессия',
    desc: 'Яркие и живые фотографии ваших детей в комфортной обстановке. Используется индивидуальный подход для создания естественных и трогательных кадров.',
    price: 'От 5000 ₽'
  },
  {
    title: 'Дополнительный час \nсъёмки',
    desc: 'Позволяет увеличить время фотосессии для более полного охвата этапов или множества образов. Цена действует при заказе основного пакета.',
    price: 'От 1500 ₽'
  }
];

const Services = () => {
  return (
    <section className={s.services}>
      <h1 className={s.title}>НАШИ УСЛУГИ</h1>
      <div className={s.grid}>
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
      <div className={s.Line}></div>
      <h2 className={s.text}>Важно:</h2>
      <p className={s.note}>
        Все цены включают профессиональную обработку фотографий, которая обеспечивает качественный и привлекательный результат. Дополнительные услуги (печать, фотокниги и т.д.) обсуждаются отдельно.
      </p>
    </section>
  );
};

export default Services;

import React from 'react';
import s from './Pass.module.css';
import '../../../Fonts.module.css'
import StepColumn from './Steps/StepColumn';

const steps = [
  {
    stepNumber: 1,
    title: 'Консультация',
    description: [
      'Обсуждение целей и идеи фотосессии.',
      'Уяснение предпочтений по стилю и жанру.',
      'Ответы на вопросы клиента и советы по подготовке.',
    ],
    side: 'left',
  },
  {
    stepNumber: 2,
    title: 'Выбор места и времени съемки',
    description: [
      'Анализ доступных локаций, их особенностей и настроения.',
      'Учет времени суток для достижения лучшего освещения.',
      'Подбор альтернативных планов в зависимости от погодных условий.',
    ],
    side: 'right',
  },
  {
    stepNumber: 3,
    title: 'Подготовка к фотосессии',
    description: [
      'Советы по выбору одежды и аксессуаров.',
      'Рекомендации по прическе и макияжу (если применимо).',
      'Проведение предварительной встречи для уточнения всех моментов.',
    ],
    side: 'left',
  },
  {
    stepNumber: 4,
    title: 'Проведение фотосессии',
    description: [
      'Организация процесса: настройка оборудования, выбор ракурсов.',
      'Создание комфортной атмосферы для моделей, работа с эмоциями.',
      'Варьирование поз и стилей во время съемки для разнообразия материалов.',
    ],
    side: 'right',
  },
  {
    stepNumber: 5,
    title: 'Постобработка',
    description: [
      'Выбор лучших снимков из всех отснятых.',
      'Ретушь: удаление недостатков, работа с цветом и контрастом.',
      'Применение художественных эффектов при необходимости.',
    ],
    side: 'left',
  },
  {
    stepNumber: 6,
    title: 'Передача готовых фото',
    description: [
      'Подготовка финальных файлов в нужном формате.',
      'Обсуждение способов передачи (онлайн-галерея, флешка, печать).',
      'Получение обратной связи от клиента и возможность доработки.',
    ],
    side: 'right',
  },
];

const Pass = () => {
  return (
    <div>
    <div className={s.container}>
      <h1 className={s.heading}>Как проходит фотосессия</h1>
      <div className={s.stepsWrapper}>
        {steps.map((step) => (
          <StepColumn
            key={step.stepNumber}
            stepNumber={step.stepNumber}
            title={step.title}
            description={step.description}
            side={step.side}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Pass;

import { useState } from 'react';
import s from './CustomSelect.module.css';

const options = [
  'Семейная фотосессия',
  'Love story',
  'Выездная фотосессия',
  'Детская фотосессия',
  'Дополнительный час съёмки',
];

const CustomSelect = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setOpen(false);
  };

  return (
    <div className={s.wrapper}>
      <div 
        className={s.selected} 
        onClick={() => setOpen(!open)}
      >
        {value || 'Тип фотосессии'}
        <div className={`${s.icon} ${open ? s.rotate : ''}`} />
      </div>
      {open && (
        <ul className={s.options}>
          {options.map((option) => (
            <li key={option} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;

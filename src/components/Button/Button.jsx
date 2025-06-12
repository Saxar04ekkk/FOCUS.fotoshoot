import s from './Button.module.css';

const Button = (props) => {
  return (
    <button
      className={`${s.button} ${props.className || ''}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;

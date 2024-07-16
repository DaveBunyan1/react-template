import "./button.css";

type ButtonProps = {
  class: string;
  text: string;
  onClick: () => void;
  disabled?: boolean;
};

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`button button-${props.class}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
};

export default Button;

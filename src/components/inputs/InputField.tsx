import "./inputfield.css";

type InputFieldProps = {
  value: string;
  name: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField = ({ value, name, type, onChange }: InputFieldProps) => {
  return (
    <input
      className="input-field"
      name={name}
      type={type}
      value={value}
      onChange={onChange}
    ></input>
  );
};

export default InputField;

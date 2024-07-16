import "./inputfield.css";

type InputFieldProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField = ({ value, onChange }: InputFieldProps) => {
  return (
    <input
      className="input-field"
      type="text"
      value={value}
      onChange={onChange}
    ></input>
  );
};

export default InputField;

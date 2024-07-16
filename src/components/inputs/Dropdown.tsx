import "./dropdown.css";

type DropdownProps = {
  options: { value: string; label: string }[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Dropdown = ({ options, value, onChange }: DropdownProps) => {
  return (
    <select className="dropdown-select" value={value} onChange={onChange}>
      {options.map((option) => (
        <option
          className="dropdown-option"
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;

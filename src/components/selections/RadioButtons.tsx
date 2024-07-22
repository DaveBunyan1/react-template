import React from "react";
import "./radiobuttons.css";

type RadioButtonProps = {
  items: string[];
  selectedItem: string | null;
  onChange: (selectedItem: string) => void;
};

const RadioButtons: React.FC<RadioButtonProps> = ({
  items,
  selectedItem,
  onChange,
}) => {
  const handleSelect = (item: string) => {
    onChange(item);
  };

  return (
    <div className="radio-buttons">
      {items.map((item) => (
        <label key={item} className="radio-container">
          {item}
          <input
            type="radio"
            name="radioButton"
            checked={selectedItem === item}
            onChange={() => handleSelect(item)}
          />
          <span className="radio-checkmark"></span>
        </label>
      ))}
    </div>
  );
};

export default RadioButtons;

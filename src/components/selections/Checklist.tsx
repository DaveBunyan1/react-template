import React from "react";
import "./checklist.css";

type ChecklistProps = {
  items: string[];
  selectedItems: string[];
  onChange: (selectedItems: string[]) => void;
};

const Checklist: React.FC<ChecklistProps> = ({
  items,
  selectedItems,
  onChange,
}) => {
  const handleToggle = (item: string) => {
    const isSelected = selectedItems.includes(item);
    const newSelectedItems = isSelected
      ? selectedItems.filter((selectedItem) => selectedItem !== item)
      : [...selectedItems, item];
    onChange(newSelectedItems);
  };

  return (
    <div className="checklist">
      {items.map((item) => (
        <label key={item} className="checklist-container">
          {item}
          <input
            type="checkbox"
            checked={selectedItems.includes(item)}
            onChange={() => handleToggle(item)}
          />
          <span className="checklist-checkmark"></span>
        </label>
      ))}
    </div>
  );
};

export default Checklist;

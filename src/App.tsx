import { useState } from "react";
import "./App.css";
import Button from "./components/buttons/Button";
import Dropdown from "./components/inputs/Dropdown";
import InputField from "./components/inputs/InputField";
import Checklist from "./components/selections/Checklist";
import RadioButtons from "./components/selections/RadioButtons";
import ThemeChangeButton from "./components/buttons/ThemeChangeButton";

function App() {
  const [selectedOption, setSelectedOption] = useState("1");
  const [inputValue, setInputValue] = useState("");
  const [selectedChecklistItems, setSelectedChecklistItems] = useState<
    string[]
  >([]);
  const [selectedRadioItem, setSelectedRadioItem] = useState<string | null>(
    null
  );

  const handleChecklistChange = (newSelectedItems: string[]) => {
    setSelectedChecklistItems(newSelectedItems);
  };

  const handleRadioChange = (item: string) => {
    setSelectedRadioItem(item);
  };

  const radioItems = [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
  ];

  const checklistItems = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
  ];

  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedOption(event.target.value);
  };

  const options = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ];

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <ThemeChangeButton />
      <h3>Buttons</h3>
      <div className="buttons">
        <Button
          class="primary"
          text="Primary"
          onClick={() => console.log("Primary button clicked")}
        />
        <Button
          class="secondary"
          text="Secondary"
          onClick={() => console.log("Secondary button clicked")}
        />
        <Button
          class="danger"
          text="Danger"
          onClick={() => console.log("Danger button clicked")}
        />
        <Button
          class="ghost-primary"
          text="Primary Ghost"
          onClick={() => console.log("Primary ghost button clicked")}
        />
        <Button
          class="ghost-secondary"
          text="Secondary Ghost"
          onClick={() => console.log("Secondary ghost button clicked")}
        />
        <Button
          class="ghost-danger"
          text="Danger Ghost"
          onClick={() => console.log("Danger ghost button clicked")}
        />
      </div>
      <h1>Inputs</h1>
      <h3>Dropdown</h3>
      <Dropdown
        options={options}
        value={selectedOption}
        onChange={handleDropdownChange}
      />
      <h3>Input Field</h3>
      <InputField value={inputValue} onChange={handleInputChange} />
      <h3>Checklist</h3>
      <Checklist
        items={checklistItems}
        selectedItems={selectedChecklistItems}
        onChange={handleChecklistChange}
      />
      <h3>Radio Buttons</h3>
      <RadioButtons
        items={radioItems}
        selectedItem={selectedRadioItem}
        onChange={handleRadioChange}
      />
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Button from "./components/buttons/Button";
import Dropdown from "./components/inputs/Dropdown";

function App() {
  const [theme, setTheme] = useState("light");
  const [selectedOption, setSelectedOption] = useState("1");

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

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };
  return (
    <>
      <Button class="primary" text="Toggle Theme" onClick={toggleTheme} />
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
    </>
  );
}

export default App;

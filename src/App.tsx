import { useState } from "react";
import "./App.css";
import Button from "./components/buttons/Button";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };
  return (
    <>
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
      <Button class="primary" text="Toggle Theme" onClick={toggleTheme} />
    </>
  );
}

export default App;

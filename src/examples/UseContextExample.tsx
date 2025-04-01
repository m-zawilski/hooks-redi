import { createContext, useContext, useState } from "react";

type Theme = "DARK" | "LIGHT";

// Create a context for the theme
const ThemeContext = createContext<Theme>("LIGHT");

const Button = () => {
  const theme = useContext(ThemeContext);

  return (
    <button
      style={{
        backgroundColor: theme === "LIGHT" ? "#fff" : "#333",
        color: theme === "LIGHT" ? "#000" : "#fff",
      }}
    >
      Button
    </button>
  );
};

const Text = () => {
  const theme = useContext(ThemeContext);

  return (
    <span
      style={{
        color: theme === "LIGHT" ? "#000" : "#fff",
      }}
    >
      Text
    </span>
  );
};

const ParentComponent = () => {
  return (
    <div>
      <Button />
      <Text />
    </div>
  );
};

const GrandparentComponent = () => {
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "LIGHT" ? "#fff" : "#333",
        padding: "20px",
      }}
    >
      <ParentComponent />
      <ParentComponent />
      <ParentComponent />
    </div>
  );
};

const UseContextExample = () => {
  const [currentTheme, setCurrentTheme] = useState<Theme>("LIGHT");

  return (
    <>
      <button
        onClick={() =>
          setCurrentTheme((theme) => (theme === "DARK" ? "LIGHT" : "DARK"))
        }
      >
        Toggle theme
      </button>
      <ThemeContext.Provider value={currentTheme}>
        <GrandparentComponent />
      </ThemeContext.Provider>
    </>
  );
};

export default UseContextExample;

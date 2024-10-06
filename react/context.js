import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children}) {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}


// use it in component
import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';

// A button that toggles the theme
function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  );
}


// App component where the ThemeProvider is used
function App() {
  return (
    <ThemeProvider>
      <div>
        <DisplayTheme />
        <ThemeToggleButton />
      </div>
    </ThemeProvider>
  );
}
